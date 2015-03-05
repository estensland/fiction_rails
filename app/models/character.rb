class Character < ActiveRecord::Base
  has_parents :sex_values => ['M','F'], :current_spouse => true
  belongs_to :house
  belongs_to :ethnie
  belongs_to :title
  has_many :titles
  has_many :peerages, through: :titles
end
