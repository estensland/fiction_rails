class StationAgentController < ApplicationController
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def show_all_models
    Rails.application.eager_load!
    @models = ActiveRecord::Base.descendants.map(&:name)
  end

  def show_all_of_a_model
    @objects = params['sa_model'].constantize.all
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
  end
end
