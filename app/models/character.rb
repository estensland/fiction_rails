class Character < ActiveRecord::Base
  has_parents :sex_values => ['M','F'], :current_spouse => true
  belongs_to :house
  has_many :character_ethnies
  has_many :ethnies, through: :character_ethnies
  belongs_to :title
  has_many :titles
  has_many :peerages, through: :titles
end
