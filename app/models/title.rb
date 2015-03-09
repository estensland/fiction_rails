class Title < ActiveRecord::Base
  belongs_to :peerage
  belongs_to :character
  belongs_to :realm
  belongs_to :ethnie
end
