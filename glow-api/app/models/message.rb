class Message < ApplicationRecord
  belongs_to :conversation
  # belongs_to :user
  has_many :emoji_messages
  has_many :emojis, through: :emoji_messages
  has_one_attached :image

end
