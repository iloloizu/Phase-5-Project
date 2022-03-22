# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_03_22_023051) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "sneakers", force: :cascade do |t|
    t.string "name"
    t.string "colorway"
    t.string "description"
    t.integer "price"
    t.string "image"
    t.string "link"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "brand"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "address"
    t.string "email"
    t.integer "size"
    t.string "color1"
    t.string "color2"
    t.string "phone"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "usr_snkrs", force: :cascade do |t|
    t.bigint "sneaker_id", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["sneaker_id"], name: "index_usr_snkrs_on_sneaker_id"
    t.index ["user_id"], name: "index_usr_snkrs_on_user_id"
  end

  add_foreign_key "usr_snkrs", "sneakers"
  add_foreign_key "usr_snkrs", "users"
end
