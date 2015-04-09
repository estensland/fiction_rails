class RealmsController < ApplicationController
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def index
    params['offset'] ||= 0
    params['page'] ||= 1
    @limit = params['number'] || 30

    @total_pages = (Realm.count / @limit.to_f).ceil
    offset = ((params['page'].to_i - 1) * @limit.to_i)

    @realms = Realm.limit(@limit).offset(params['offset'])
  end

  def show
    @realm = Realm.find(params[:id])
    @prim_title = @realm.primary_title.present? ? @realm.primary_title.peerage.title : ''
  end
end
