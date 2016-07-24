class Realm < ActiveRecord::Base
  has_ancestry
  belongs_to :title # Just the primary title
  has_many :titles  # All of them
  has_many :houses
  has_many :characters, through: :houses

  def main_title
    if self.title && self.title.peerage
      self.title.peerage.title
    end
  end

  def character_ids
    characters.pluck(:id)
  end

  def api_ready
    self.to_json(:methods => [:main_title, :houses, :characters, :titles, :parent, :children, :character_ids])
  end

  def primary_title
    title
  end
end
