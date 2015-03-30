class CharactersController < ApplicationController
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def index
    params['offset'] ||= 0
    @characters = Character.limit(100).offset(params['offset'])
  end

  def show
    @character = Character.find(params[:id])
    @houseage = @character.primary_house ? " of House #{@character.primary_house.name}" : " "
    @tree = FamilyTree.new(character: @character).descendant_html
  end
end
