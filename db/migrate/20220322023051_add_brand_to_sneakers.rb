class AddBrandToSneakers < ActiveRecord::Migration[6.1]
  def change
    add_column :sneakers, :brand, :string
  end
end
