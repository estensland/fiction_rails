class Timeline < ActiveRecord::Base
  has_many :timeline_timeline_events
  has_many :timeline_events, through: :timeline_timeline_events

end
