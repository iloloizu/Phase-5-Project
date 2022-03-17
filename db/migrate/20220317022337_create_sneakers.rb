class CreateSneakers < ActiveRecord::Migration[6.1]
  def change
    create_table :sneakers do |t|
      t.string :name
      t.string :colorway
      t.string :description
      t.integer :price
      t.string :image
      t.string :link

      t.timestamps
    end
  end
end
