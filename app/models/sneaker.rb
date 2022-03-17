class Sneaker < ApplicationRecord
    has_many :usr_snkrs
    has_many :users, through: :usr_snkrs
end
