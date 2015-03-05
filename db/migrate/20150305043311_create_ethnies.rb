class CreateEthnies < ActiveRecord::Migration
  def change
    create_table :ethnies do |t|
      t.string :name
      t.text :description
      t.string :ancestry

      t.timestamps
    end
    add_index :ethnies, :ancestry
  end
end
