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

  def attachImageToMessage (message)
    message.image.attach(io: params[:image].tempfile, 
    filename: params[:image].original_filename, 
    content_type: params[:image].content_type)
    url = url_for(message.image)
    message.update(image_url: url)
    user = User.find(params[:user_id])

    if user.points == nil 
      user.update(points: 1)
    elsif
      user.update(points: user.points + 1)
    end
  end

  def create
    # byebug
    user = User.find(params[:user_id])
    message = Message.new(text: params[:text], conversation_id: 
    params[:conversation_id], user_id: params[:user_id])
    conversation = Conversation.find(params[:conversation_id])

    # if a user is in a conversation make sure they are only communicating within that conversation
    
    if user.conversation && message.conversation_id = user.conversation.id
      message.save 
      if message.save
        if !(params[:image] === "no image")
          attachImageToMessage(message)
        end
        broadcastConversation(message, conversation.id)
      end

    elsif !(user.conversation)
      user.update(conversation_id: params[:conversation_id])
      message.save 
      if message.save
         # check if user has an image adds point value to player
        if !(params[:image] === "no image")
          attachImageToMessage(message)
        end
        broadcastConversation(message, conversation.id)
      end
    end

  end

  private

  def message_params
    params.require(:message).permit(:text, :conversation_id, :image)
  end
end
