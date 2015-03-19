class Character < ActiveRecord::Base
  has_parents :sex_values => ['M','F'], :current_spouse => true
  belongs_to :primary_house, foreign_key: "house_id", class_name: "House"
  has_many :character_ethnies
  has_many :ethnies, through: :character_ethnies
  has_many :character_houses
  has_many :houses, through: :character_houses
  belongs_to :primary_title,  foreign_key: "title_id", class_name: "Title"
  has_many :titles
  has_many :peerages, through: :titles

  after_create :merge_houses

  def self.grab(name)
    self.where(bailic_name: name)
  end

  def add_married_house(input_house)
    CharacterHouse.create(character_id: self.id, house_id: input_house.id, married_house: true)
    self.primary_house = input_house
    self.save
    self
  end

  def merge_houses
    if self.primary_house.present?
      self.houses << self.primary_house
    end
  end
end
