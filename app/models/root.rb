class Roots < ActiveRecord::Base
  has_many :form_roots
  has_many :forms, through: form_roots

end
