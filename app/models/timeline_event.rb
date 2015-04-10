class TimelineEvent < ActiveRecord::Base
  has_many :timeline_timeline_events
  has_many :timelines, through: :timeline_timeline_events

end
