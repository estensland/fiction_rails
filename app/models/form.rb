class Form < ActiveRecord::Base
  has_many :form_roots
  has_many :roots, through: :form_roots


  def conjugate(root)
    formula.
      gsub('0', root[0]).
      gsub('1', root[1]).
      gsub('2', root[2]).

      gsub('3', 'ṅ').
      gsub('4', 'ñ').
      gsub('5', 'ğ').
      gsub('5', 'ğ').
      gsub('6', 'ç').
      gsub('7', 'ş').
      gsub('8', 'Þ').
      gsub('9', 'ı').
      downcase.capitalize
  end
end
