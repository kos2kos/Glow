class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :conversation_id, :points, :workouts

  def workouts
    object.messages.select{|message| message.image_url}
  end


end
