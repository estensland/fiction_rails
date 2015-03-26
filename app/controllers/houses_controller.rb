class HousesController < ApplicationController
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  
  def index
    @page = params['page'']
    @limit = params['limit']
    @houses = House.limit(params['limit']).offset(params['offset'] * params['limit'])
  end
  
  def show
    @house = House.find(params['id'])
    @characters = @house.characters
  end
end
