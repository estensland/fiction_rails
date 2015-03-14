class House < ActiveRecord::Base
  has_many :characters, as: :primary_house_characters
  has_many :character_houses
  has_many :characters, through: :character_houses

  belongs_to :realm
end
