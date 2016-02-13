class CharactersController < ApplicationController
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def index
    @characters = Character.where(nil)

    if params['search']
      @characters = @characters.where(
        Character.arel_table['native_name'].matches("%#{params['search']}%").or(
          Character.arel_table['bailic_name'].matches("%#{params['search']}%")
        )
      )
    end

    params['page'] ||= 1
    @limit = params['number'] || 30


    @total_pages = (@characters.count / @limit.to_f).ceil

    offset = ((params['page'].to_i - 1) * @limit.to_i)

    @characters = @characters.limit(@limit).offset(offset)
  end

  def show
    @character = Character.find(params[:id])
    @houseage = @character.primary_house ? " of House #{@character.primary_house.name}" : " "
    @tree = FamilyTree.new(character: @character).descendant_html
  end
end
