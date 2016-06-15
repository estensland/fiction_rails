class Api::CharactersController < ApplicationController
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  # protect_from_forgery with: :exception


  def index
    render json: Character.order(:composite_name), status: 200
  end


  def show
    binding.pry
    render json: Character.find(params['id']).api_ready, status: 200
  end

  def search
    render json: Character.search(params['search']), status: 200
  end
end
