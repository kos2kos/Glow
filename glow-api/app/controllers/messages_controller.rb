class MessagesController < ApplicationController
  def index
    @messages = Message.all
    render json: @messages
  end

  def show
    @message = Message.find(params[:id])
    render json: @message
  end

  def update
    @message = Message.find(params[:id])
    arrayOfEmojis = params[:emojis].map {|emoji| Emoji.find(emoji[:id])}
    @message.update(emojis: arrayOfEmojis)
    if @message.save
      broadcastConversation(@message, params[:conversation_id])
    end
  end

  def create
    message = Message.new(message_params)
    conversation = Conversation.find(message_params[:conversation_id])
    if message.save
      broadcastConversation(message, conversation.id)
    end
  end

  private

  def message_params
    params.require(:message).permit(:text, :conversation_id)
  end
end
