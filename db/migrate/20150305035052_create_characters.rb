class CreateCharacters < ActiveRecord::Migration
  def change
    create_table :characters do |t|
      t.string :bailic_name
      t.string :bailic_translation
      t.string :native_name
      t.string :native_translation
      t.string :nickname
      t.string :fighting_class
      t.string :real_person
      t.string :non_human
      t.text :description

      t.integer :house_id
      t.integer :title_id

      # For Genealogy
      t.integer :father_id
      t.integer :mother_id
      t.string :sex
      t.integer :current_spouse_id

      t.timestamps
    end
  end
end
