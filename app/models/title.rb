class Title < ActiveRecord::Base
  belongs_to :ethnie
  belongs_to :character
  belongs_to :realm
end
