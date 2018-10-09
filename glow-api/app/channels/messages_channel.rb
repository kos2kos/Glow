class MessagesChannel < ApplicationCable::Channel
  def subscribed
    conversation = Conversation.find(params[:coconversation])
    stream_for conversation
  end

  def unsubscribed
  end
end
