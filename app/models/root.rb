class Root < ActiveRecord::Base
  has_many :form_roots
  has_many :forms, through: :form_roots

  def conjugations
    form_roots.map{|form_root| {form_root: form_root, congjugation: form_root.conjugate}}
  end

  def api_ready
    self.to_json(methods: [:conjugations])
  end
end
