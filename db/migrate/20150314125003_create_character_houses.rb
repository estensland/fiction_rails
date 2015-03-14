class CreateCharacterHouses < ActiveRecord::Migration
  def change
    create_table :character_houses do |t|
      t.integer :character_id
      t.integer :house_id

      t.timestamps
    end
  end
end
