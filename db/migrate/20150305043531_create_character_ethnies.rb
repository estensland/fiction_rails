class CreateCharacterEthnies < ActiveRecord::Migration
  def change
    create_table :character_ethnies do |t|
      t.integer :character_id
      t.integer :ethny_id

      t.timestamps
    end
  end
end
