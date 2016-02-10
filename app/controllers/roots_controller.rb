class RootsController < ApplicationController
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def index
    params['offset'] ||= 0
    @characters = Root.limit(100).offset(params['offset'])
  end

  def show
    @root = Root.find(params[:id])
  end
end
