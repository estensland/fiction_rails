class Peerage < ActiveRecord::Base
  has_many :titles
  has_many :characters, through: :titles
  has_many :realms, through: :titles
end
