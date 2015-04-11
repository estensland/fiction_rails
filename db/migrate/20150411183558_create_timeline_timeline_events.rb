class CreateTimelineTimelineEvents < ActiveRecord::Migration
  def change
    create_table :timeline_timeline_events do |t|
      t.integer :timeline_id
      t.integer :timeline_event_id

      t.timestamps
    end
  end
end
