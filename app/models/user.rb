class User < ApplicationRecord
    has_many :stores, dependent: :destroy
    has_many :usr_snkrs
    has_many :sneakers, through: :usr_snkrs
    
    has_secure_password
    
    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
    
    def reset_password!(password)
        self.password = password
        save!
    end

end
