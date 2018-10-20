class User < ApplicationRecord
  has_many :messages
  has_many_attached :images
  belongs_to :conversation, optional: true


end
