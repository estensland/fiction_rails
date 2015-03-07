class OverlordController < ApplicationController
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def show_anything
    @model = params['model'].capitalize.constantize.find(params['id'])

    @attributes = @model.attributes
    @attr_hash = @model.class.columns_hash
  end

  def update_anything
    attribs = params[params['model'].downcase]
    object = params['model'].constantize.find(attribs['id'])

    attribs.each do |attr, val|
      object.send("#{attr}=", val)
    end
    object.save
    redirect_to request.referer
  end

end
