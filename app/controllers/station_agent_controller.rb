class StationAgentController < ApplicationController
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def show_all_models
    Rails.application.eager_load!
    @models = ActiveRecord::Base.descendants.map(&:name)
  end

  def show_all_of_a_model
    @class = params['sa_model'].constantize

    if params['associations_of_model']
      @objects = params['associations_of_model'].constantize.find(params['associations_of_id']).send(params['association']).order(:id)
    else
      @objects = @class.order(:id)
    end

    if @objects.first
      @attributes = @objects.first.attributes.map(&:first)
    end
  end

  def show_anything
    grab_and_set_model_attrs
  end

  def edit_anything
    grab_and_set_model_attrs
  end

  def update_anything
    attribs = params[params['sa_model'].downcase]
    object = params['sa_model'].constantize.find(attribs['id'])
    attribs.each do |attr, val|
      object.send("#{attr}=", val)
    end
    object.save
    redirect_to request.referer
  end

  private

  def grab_and_set_model_attrs
    @model = params['sa_model'].capitalize.constantize.find(params['sa_id'])

    @attributes = @model.attributes
    @attr_hash = @model.class.columns_hash

    @associations = {multiple: [], one: []}
    @model.class.reflect_on_all_associations.each do |assoc|
      res = @model.send(assoc.name)
      next unless res.present?

      if res.class.name == assoc.klass.name
        @associations[:one] << {name: assoc.name, model_name: assoc.klass.name, object: res}
      else
        @associations[:multiple] << {name: assoc.name, model_name: assoc.klass.name, count: res.count}
      end
    end
  end

  def yaml_file?
    File.exist?("#{Rails.root}/config/station_agent.yml")
  end

  def load_yaml
    @yaml = YAML.load_file("#{Rails.root}/config/station_agent.yml")
  end

  def has_yaml_override?(model)
    @yaml.has_key?(model)
  end

  def has_yaml_attr?(yaml_data, first, array_value = nil)
    if yaml_data.has_key?(first)
      array_value.present? ? yaml_data[first].include?(array_value) : true
    end
  end

  def has_yaml_ignore_columns?(yaml_data)
    has_yaml_ignore?(yaml_data, 'ignore_columns')
  end

  def has_yaml_ignore_model?(yaml_data, model)
    has_yaml_ignore?(yaml_data, 'ignore_models', model)
  end

  def remove_ignored_columns(attributes, yaml_data)
    if yaml_data['ignored_columns'].include?('timestamps')
      yaml_data['ignored_columns'] << 'created_at' << 'updated_at'
    end

    attributes.except!(*yaml_data['ignored_columns'])
    attributes
  end
end
