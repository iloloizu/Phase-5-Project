class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :address, :email, :size, :color1, :color2, :phone
end
