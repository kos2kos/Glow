class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :conversation_id, :points
end
