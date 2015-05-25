class Api::TimelineController < ApplicationController
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  # protect_from_forgery with: :exception


  def index
    render json: Timeline.all, status: 200
  end


  def show
    render json: Timeline.find(params['id']), status: 200
  end

end
