class CreateTimelineEventRelateds < ActiveRecord::Migration
  def change
    create_table :timeline_event_relateds do |t|
      t.integer :timeline_event_id
      t.integer :related_id
      t.integer :related_type
    end
  end
end
