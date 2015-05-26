class House < ActiveRecord::Base
  has_many :primary_house_characters, class_name: :character
  has_many :character_houses
  has_many :characters, through: :character_houses

  belongs_to :realm

  def api_ready
    self.to_json(:methods => [:primary_house_characters, :characters, :realm])
  end
end
