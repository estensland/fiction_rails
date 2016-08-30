class CreateAffixFormRoots < ActiveRecord::Migration
  def change
    create_table :affix_form_roots do |t|
      t.integer :affix_id
      t.integer :form_root_id
      t.integer :ordering, default: 0

      t.timestamps
    end
  end
end
