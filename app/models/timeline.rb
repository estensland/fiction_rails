class Timeline < ActiveRecord::Base
  has_many :timeline_timeline_events
  has_many :timeline_events, through: :timeline_timeline_events

  def api_ready
    self.to_json(methods: [:timeline_events])
  end
end
