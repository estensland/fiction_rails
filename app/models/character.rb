class Character < ActiveRecord::Base
  has_parents :sex_values => ['M','F'], :current_spouse => true
  belongs_to :primary_house, class_name: :house
  has_many :character_ethnies
  has_many :ethnies, through: :character_ethnies
  has_many :character_houses
  has_many :houses, through: :character_houses
  belongs_to :primary_title, class_name: :title
  has_many :titles
  has_many :peerages, through: :titles
end
