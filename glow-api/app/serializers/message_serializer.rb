class MessageSerializer < ActiveModel::Serializer
  attributes :id, :conversation_id, :text, :created_at, :emojis, :image_url
  has_many :emojis
end
