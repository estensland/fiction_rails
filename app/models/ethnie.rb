class Ethnie < ActiveRecord::Base
  has_many :characters

  has_ancestry
end
