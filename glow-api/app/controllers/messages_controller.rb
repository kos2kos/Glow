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
    arrayOfEmojis = params[:emojis].map {|emoji| Emoji.create(img: emoji[:img])}
    @message.update(emojis: arrayOfEmojis)
    render json: @message
  end

  def create
    message = Message.new(message_params)
    conversation = Conversation.find(message_params[:conversation_id])
    if message.save
      serialized_data = ActiveModelSerializers::Adapter::Json.new(
        MessageSerializer.new(message)
      ).serializable_hash
      MessagesChannel.broadcast_to conversation, serialized_data
      head :ok
    end
  end

  private

  def message_params
    params.require(:message).permit(:text, :conversation_id)
  end
end
