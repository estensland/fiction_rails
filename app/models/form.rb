class Form < ActiveRecord::Base
  has_many :form_roots
  has_many :forms, through: :roots

end
