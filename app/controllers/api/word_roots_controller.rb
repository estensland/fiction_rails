class Api::WordRootsController < ApplicationController
  def index
    render json: WordRoot.limit(30), status: 200
  end

  def show
    render json: WordRoot.find(params['id']).api_ready, status: 200
  end

  def search
    render json: WordRoot.search(params['search']), status: 200
  end
end
