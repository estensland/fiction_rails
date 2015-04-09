class CreateRealms < ActiveRecord::Migration
  def change
    create_table :realms do |t|
      t.string :name
      t.string :translation
      t.integer :title_id
      t.text :description
      t.string :ancestry

      t.timestamps
    end
    add_index :realms, :ancestry
  end
end
