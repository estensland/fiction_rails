# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160725012611) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "affix_form_roots", force: :cascade do |t|
    t.integer  "affix_id"
    t.integer  "form_root_id"
    t.integer  "ordering",     default: 0
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "affixes", force: :cascade do |t|
    t.string   "name"
    t.string   "formula"
    t.integer  "language_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "character_ethnies", force: :cascade do |t|
    t.integer  "character_id"
    t.integer  "ethny_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "character_houses", force: :cascade do |t|
    t.integer  "character_id"
    t.integer  "house_id"
    t.boolean  "married_house"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "characters", force: :cascade do |t|
    t.string   "bailic_name"
    t.string   "bailic_translation"
    t.string   "native_name"
    t.string   "native_translation"
    t.string   "nickname"
    t.string   "fighting_class"
    t.string   "real_person"
    t.string   "non_human"
    t.text     "description"
    t.string   "composite_name"
    t.integer  "house_id"
    t.integer  "title_id"
    t.integer  "father_id"
    t.integer  "mother_id"
    t.string   "sex"
    t.integer  "current_spouse_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "ethnies", force: :cascade do |t|
    t.string   "name"
    t.text     "description"
    t.string   "ancestry"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "ethnies", ["ancestry"], name: "index_ethnies_on_ancestry", using: :btree

  create_table "form_roots", force: :cascade do |t|
    t.string   "meaning"
    t.integer  "root_id"
    t.integer  "form_id"
    t.boolean  "noun",       default: true
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "forms", force: :cascade do |t|
    t.string   "name"
    t.string   "formula"
    t.integer  "language_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "houses", force: :cascade do |t|
    t.string   "name"
    t.string   "translation"
    t.text     "description"
    t.integer  "realm_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "languages", force: :cascade do |t|
    t.string  "name"
    t.text    "description"
    t.boolean "root_structure"
  end

  create_table "locations", force: :cascade do |t|
    t.string   "name"
    t.string   "translation"
    t.text     "description"
    t.string   "ancestry"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "locations", ["ancestry"], name: "index_locations_on_ancestry", using: :btree

  create_table "peerages", force: :cascade do |t|
    t.string   "title"
    t.integer  "authority_level"
    t.text     "description"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "realms", force: :cascade do |t|
    t.string   "name"
    t.string   "translation"
    t.integer  "title_id"
    t.text     "description"
    t.string   "ancestry"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "realms", ["ancestry"], name: "index_realms_on_ancestry", using: :btree

  create_table "roots", force: :cascade do |t|
    t.string   "root"
    t.string   "meaning"
    t.integer  "language_id"
    t.integer  "parent_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "timeline_event_relateds", force: :cascade do |t|
    t.integer "timeline_event_id"
    t.integer "related_id"
    t.integer "related_type"
  end

  create_table "timeline_events", force: :cascade do |t|
    t.string   "name"
    t.integer  "year"
    t.text     "description"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "timeline_timeline_events", force: :cascade do |t|
    t.integer  "timeline_id"
    t.integer  "timeline_event_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "timelines", force: :cascade do |t|
    t.string   "name"
    t.text     "description"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "titles", force: :cascade do |t|
    t.integer  "character_id"
    t.integer  "peerage_id"
    t.integer  "realm_id"
    t.integer  "ethny_id"
    t.text     "description"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "name"
    t.string   "role"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree

end
