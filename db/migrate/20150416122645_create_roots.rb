class CreateRoots < ActiveRecord::Migration
  def change
    create_table :roots do |t|
      t.string  :root
      t.string  :meaning
      t.integer :language_id
      
      t.timestamps
    end
  end
end
