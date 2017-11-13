class LabSerializer < ActiveModel::Serializer
  attributes :title
  has_many :users
end
