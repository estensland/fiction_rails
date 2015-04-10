class TimelineController < ApplicationController
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def index
    params['offset'] ||= 0
    @timelines = Timeline.limit(100).offset(params['offset'])
  end
  
  def show
    @timeline = Timeline.find(params['id'])
    @events = @timeline.timeline_events
  end
  
end
