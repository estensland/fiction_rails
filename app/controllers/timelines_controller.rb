class TimelineController < ApplicationController
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def index
    params['offset'] ||= 0
    @timelines = Timeline.limit(100).offset(params['offset'])
    @timelines.unshift(Timeline.new(name: 'Master Timeline'))
  end

  def show
    if params['master']
      @timeline = Timeline.new(name: 'Master Timeline')
      @events = TimelineEvents.all
    else
      @timeline = Timeline.find(params['id'])
      @events = @timeline.timeline_events
    end
  end

end
