class Character < ActiveRecord::Base
  has_parents :sex_values => ['M','F'], :current_spouse => true
  belongs_to :primary_house, foreign_key: "house_id", class_name: "House"
  has_many :character_ethnies
  has_many :ethnies, through: :character_ethnies
  has_many :character_houses
  has_many :houses, through: :character_houses
  belongs_to :primary_title,  foreign_key: "title_id", class_name: "Title"
  has_many :titles
  has_many :peerages, through: :titles
  has_many :timeline_event_relateds
  has_many :timeline_events, through: :timeline_event_relateds, source: :related, source_type: 'Character'

  after_create :merge_houses

  def self.grab(name)
    self.where(bailic_name: name)
  end

  def add_married_house(input_house)
    CharacterHouse.create(character_id: self.id, house_id: input_house.id, married_house: true)
    self.primary_house = input_house
    self.save
    self
  end

  def merge_houses
    if self.primary_house.present?
      self.houses << self.primary_house
    end
  end

  def composite_name
    name = ''
    name << self.native_name << ' ' if self.native_name
    name << self.bailic_name << ' ' if self.bailic_name
    name << self.nickname << ' ' if self.nickname
    if self.primary_house
      if primary_house.name.match(/Tribe/)
        name << "of #{self.primary_house.name}"
      else
        name << "of House #{self.primary_house.name}"
      end
    end
    name
  end

  def limited_ancestors(num_generations)
    count = 0

    ids = []
    generation_ids = parents.compact.map(&:id)
    while (count < num_generations) && (generation_ids.length > 0)
      next_gen_ids = []
      ids += generation_ids

      until generation_ids.empty?
        ids.unshift(generation_ids.shift)
        next_gen_ids += gclass.find(ids.first).parents.compact.map(&:id)
      end
      generation_ids = next_gen_ids
      count += 1
    end
    gclass.where(id: ids)
  end

  def treed
    FamilyTree.new(character: self).descendant_html
  end

  def api_ready
    self.to_json(:methods => [:houses, :primary_house, :father, :mother, :current_spouse, :peerages, :parents, :grandparents, :great_grandparents, :uncles_and_aunts, :cousins, :nieces_and_nephews, :children, :grandchildren, :great_grandchildren])
  end
end
