class Api::HousesController < ApplicationController
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  # protect_from_forgery with: :exception


  def index
    @houses = House.order(:name)

    if params['house_ids']
      @houses = @houses.where(id: params['house_ids'].split(','))
    end

    render json: @houses, status: 200
  end


  def show
    render json: House.find(params['id']).api_ready, status: 200
  end
end
