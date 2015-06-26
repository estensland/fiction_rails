class CreateWordRoots < ActiveRecord::Migration
  def change
    create_table :word_roots do |t|
      t.string  :word_source
      t.boolean :subconjugations
      t.json    :word_tributaries
      t.integer :language_id
    end
  end
end
