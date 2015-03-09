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
end
