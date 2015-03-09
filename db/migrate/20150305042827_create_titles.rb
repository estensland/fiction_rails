class CreateTitles < ActiveRecord::Migration
  def change
    create_table :titles do |t|
      t.integer :character_id
      t.integer :peerage_id
      t.integer :realm_id
      t.integer :ethny_id
      t.text :description

      t.timestamps
    end
  end
end
