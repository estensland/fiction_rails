class CharactersController < ApplicationController
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def index
    params['offset'] ||= 0
    @characters.limit(100).offset(params['offset'])
  end

  def show
    @character = Character.find(params[:id])
    @tree = FamilyTree.new(character: @character).descendant_html
  end
end
