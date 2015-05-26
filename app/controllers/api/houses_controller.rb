class Api::HousesController < ApplicationController
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  # protect_from_forgery with: :exception


  def index
    render json: House.all, status: 200
  end


  def show
    render json: House.find(params['id']).api_ready, status: 200
  end
end
