class Realm < ActiveRecord::Base
  has_ancestry
  belongs_to :title # Just the primary title
  has_many :titles  # All of them
  has_many :houses
  has_many :characters, through: :houses

  def main_title
    if self.primary_title && self.primary_title.peerage
      self.primary_title.peerage.title
    end
  end
end
