class TimelineEventRelated < ActiveRecord::Migration
  def change
    create_table :timeline_events do |t|
      t.integer :timeline_event_id
      t.integer :related_type
      t.integer :related_id
    end
  end
end
