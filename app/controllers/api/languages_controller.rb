class Api::LanguagesController < ApplicationController
  def index
    render json: Langauge.limit(30), status: 200
  end

  def show
    render json: Langauge.find(params['id']).api_ready, status: 200
  end

  def search
    render json: Langauge.search(params['search']), status: 200
  end
end
