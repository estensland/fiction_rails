class Form < ActiveRecord::Base
  has_many :form_roots
  has_many :roots, through: :form_roots


  def conjugate(root)
    formula.gsub('1', root[0]).gsub('2', root[1]).gsub('3', root[2]).downcase.capitalize
  end
end
