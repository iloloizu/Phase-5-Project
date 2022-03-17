class UsrSnkrSerializer < ActiveModel::Serializer
  attributes :id
  has_one :sneaker
  has_one :user
end
