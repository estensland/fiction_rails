class HousesController < ApplicationController
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def index
    @page = params['page'] || 1
    @limit = params['number'] || 10
    @total_pages = (House.count / @limit.to_f).ceil
    offset = ((@page.to_i - 1) * @limit)
    @houses = House.limit(@limit).offset(offset)
  end

  def show
    params['page'] ||= 1
    @limit = params['number'] || 30

    @house = House.find(params['id'])

    characters = @house.characters

    @total_pages = (characters.count / @limit.to_f).ceil

    offset = ((params['page'].to_i - 1) * @limit.to_i)

    @characters = characters.limit(@limit).offset(offset)
  end
end
