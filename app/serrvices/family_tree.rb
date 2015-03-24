class FamilyTree
  attr_reader :chracter, :tree_json
  def initialize(opts={})
    @character = opts[:character]
    @generations_back = opts[:generations_back]
    @generations_forward = opts[:generations_forward]
    @tree_json = generate_json
  end

  def generate_json
    get_json(@character)
  end

  def get_json(relative)
    return nil unless relative
    res = {}
    res[relative.id] = {bailic_name: relative.bailic_name, native_name: relative.native_name, house: relative.primary_house.try(:name), father: get_json(relative.father), mother: get_json(relative.mother), current_spouse: relative.current_spouse_id}
    res
  end

  def descendant_html(relative = @character)
    res = []
    parented = relative == @character ? false : true
    res << {bailic_name: relative.bailic_name, native_name: relative.native_name, house: relative.primary_house.try(:name), parented: parented}
    spouses = relative.spouses

    if relative.current_spouse && !relative.spouses.include?(relative.current_spouse)
      spouses << relative.current_spouse
    end

    spouses.each do |spouse|
      child_store = {child_store: true, children: []}
      relative.children(spouse: spouse).each do |child|
        child_store[:children] += descendant_html(child)
      end
      res << child_store
      res << {bailic_name: spouse.bailic_name, native_name: spouse.native_name, house: spouse.primary_house.try(:name)}
    end
    res
  end

  # slightly modified from: http://stackoverflow.com/questions/8301566/find-key-value-pairs-deep-inside-a-hash-containing-an-arbitrary-number-of-nested/16681085#16681085

  def deep_find(key, object, found=nil)
    if object.is_a?(Hash) && object.key?(key)
      object[key]
    elsif object.is_a? Enumerable
      object.find { |*a| found = deep_find(key, a.last) }
      found
    end
  end

end
