class CreateUsrSnkrs < ActiveRecord::Migration[6.1]
  def change
    create_table :usr_snkrs do |t|
      t.belongs_to :sneaker, null: false, foreign_key: true
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
