class SneakerSerializer < ActiveModel::Serializer
  attributes :id, :name, :colorway, :description, :price, :image, :link
end
