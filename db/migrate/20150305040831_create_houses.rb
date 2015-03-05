class CreateHouses < ActiveRecord::Migration
  def change
    create_table :houses do |t|
      t.string :name
      t.string :translation
      t.text :description
      t.integer :realm_id

      t.timestamps
    end
  end
end
