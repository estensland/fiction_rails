class House < ActiveRecord::Base
  has_many :characters
  belongs_to :realm
end
