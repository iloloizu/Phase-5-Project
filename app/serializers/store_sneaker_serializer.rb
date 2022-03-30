class StoreSneakerSerializer < ActiveModel::Serializer
  attributes :id, :name, :colorway, :description, :price, :image, :link, :brand
end
