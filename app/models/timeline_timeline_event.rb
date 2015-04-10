class TimelineTimelineEvent < ActiveRecord::Base
  belongs_to :timeline
  belongs_to :timeline_event

end
