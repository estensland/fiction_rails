class Api::RootsController < ApplicationController
  def index
    render json: Root.limit(30), status: 200
  end

  def show
    render json: Root.find(params['id']).api_ready, status: 200
  end

  def search
    render json: Root.search(params['search']), status: 200
  end
end
