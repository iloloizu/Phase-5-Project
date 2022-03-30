class CreateStoreSneakers < ActiveRecord::Migration[6.1]
  def change
    create_table :store_sneakers do |t|
      t.string :name
      t.string :colorway
      t.string :description
      t.integer :price
      t.string :image
      t.string :link
      t.string :brand

      t.timestamps
    end
  end
end
