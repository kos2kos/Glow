class MessageSerializer < ActiveModel::Serializer
  attributes :id, :conversation_id, :text, :created_at, :emojis, :image_url, :user
  has_many :emojis
  belongs_to :user
end
