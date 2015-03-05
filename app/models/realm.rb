class Realm < ActiveRecord::Base
  has_ancestry
  belongs_to :peerage
end
