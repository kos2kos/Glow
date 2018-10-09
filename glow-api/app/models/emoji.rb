class Emoji < ApplicationRecord
  has_many :emoji_messages
  has_many :messages, through: :emoji_messages
end
