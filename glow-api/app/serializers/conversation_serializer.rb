class ConversationSerializer < ActiveModel::Serializer
  attributes :id, :title, :username
  has_many :messages
end
