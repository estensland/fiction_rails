class FamilyTree
  attr_reader: :chracter
  def initialize(opts={})
    @character = opts[:character]
    @tree_json = generate_json
  end

  def generate_json
    @character.family
  end

end
