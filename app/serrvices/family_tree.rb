class FamilyTree
  attr_reader: :chracter
  def initialize(opts={})
    @character = opts[:character]
    @generations_back = opts[:generations_back]
    @generations_forward = opts[:generations_forward]
    @tree_json = generate_json
  end

  def generate_json
    @character.family(generations_forward: @generations_forward, generations_back: @generations_back)
  end

end
