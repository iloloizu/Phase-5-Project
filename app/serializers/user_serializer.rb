class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :address, :email, :size, :color1, :color2, :phone, :is_admin
  has_many :sneakers
end
