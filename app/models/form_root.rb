class FormRoot < ActiveRecord::Base
  belongs_to :form
  belongs_to :root
  has_many :affix_form_roots
  has_many :affixes, through: :affix_form_roots

  def conjugate
    with_vowel_harmony
  end

  def base_conjugate
    conjugation_in_prog = form.conjugate(root.root)
    affix_form_roots.sort_by{|aff| aff.ordering}.map(&:affix).each do |affix|
      conjugation_in_prog = affix.conjugate(conjugation_in_prog)
    end
    conjugation_in_prog
  end

  def with_vowel_harmony
    if noun?
      base_conjugate.
      gsub('e', 'a').
      gsub('i', 'ı').
      gsub('o', 'ö').
      gsub('u', 'ü')
    else
      base_conjugate.
      gsub('a', 'e').
      gsub('ı', 'i').
      gsub('ö', 'o').
      gsub('ü', 'u')
    end
  end

end
