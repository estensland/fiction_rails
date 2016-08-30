class CreateFormRoots < ActiveRecord::Migration
  def change
    create_table :form_roots do |t|
      t.string  :meaning
      t.integer :root_id
      t.integer :form_id
      t.boolean :noun, default: true

      t.timestamps
    end
  end
end
