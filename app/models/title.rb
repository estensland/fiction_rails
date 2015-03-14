class Title < ActiveRecord::Base
  belongs_to :peerage
  has_many :characters, through: :peerage, as: :peerage_titles

  belongs_to :character
  belongs_to :realm
  belongs_to :ethnie
end
