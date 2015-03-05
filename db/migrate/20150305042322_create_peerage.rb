class CreatePeerage < ActiveRecord::Migration
  def change
    create_table :peerages do |t|
      t.string :title
      t.integer :authority_level
      t.text :description

      t.timestamps
    end
  end
end
