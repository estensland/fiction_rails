class TimelineEventRelated < ActiveRecord::Base
  belongs_to :timeline_event
  has_one :timeline, through: :timeline_event
  belongs_to :related, polymorphic: true

end
