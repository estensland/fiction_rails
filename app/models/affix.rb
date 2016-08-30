class Affix < ActiveRecord::Base
  has_many :affix_form_roots
  has_many :form_roots, through: :affix_form_roots

  def conjugate(stem)
    formula.
      gsub('@', stem).

      gsub('3', 'ṅ').
      gsub('4', 'ñ').
      gsub('5', 'ğ').
      gsub('5', 'ğ').
      gsub('6', 'ç').
      gsub('7', 'ş').
      gsub('8', 'Þ').
      gsub('9', 'ı').
      gsub('+', 'ö').
      gsub('-', 'ü').
      downcase.capitalize
  end

end
