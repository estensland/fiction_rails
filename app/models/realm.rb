class Realm < ActiveRecord::Base
  has_ancestry
  belongs_to :peerage

  def main_title
    if self.primary_title && self.primary_title.peerage
      self.primary_title.peerage.title
    end
  end
end
