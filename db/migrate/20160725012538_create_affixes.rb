class CreateAffixes < ActiveRecord::Migration
  def change
    create_table :affixes do |t|
      t.string  :name
      t.string  :formula
      t.integer :language_id

      t.timestamps
    end
  end
end
