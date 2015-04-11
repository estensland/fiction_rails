class CreateTimelineEvents < ActiveRecord::Migration
  def change
    create_table :timeline_events do |t|
      t.string :name
      t.integer :year
      t.text :description

      t.timestamps
    end
  end
end
