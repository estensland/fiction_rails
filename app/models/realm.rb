class Location < ActiveRecord::Base
  has_ancestry
  belongs_to :peerage
end
