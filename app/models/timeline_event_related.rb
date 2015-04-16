class TimelineEventRelated < ActiveRecord::Base
  belongs_to :timeline_event
  belongs_to :timeline, through :timeline_event
  belongs_to :related, polymorphic: true

end
