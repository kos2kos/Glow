class ApplicationController < ActionController::API
  def broadcastConversation (message, conversation_id)

    conversation = Conversation.find(conversation_id)
    serialized_data = ActiveModelSerializers::Adapter::Json.new(
      MessageSerializer.new(message)
    ).serializable_hash

    MessagesChannel.broadcast_to conversation, serialized_data
    head :ok
  end

end
