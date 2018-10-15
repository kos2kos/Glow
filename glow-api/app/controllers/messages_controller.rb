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



    message = Message.create(text: params[:text], conversation_id: params[:conversation_id])

    # message.image.attach(io: params[:image].tempfile, filename: params[:image].original_filename, content_type: params[:image].content_type)


    if !(params[:image] === "no image")

      message.image.attach(io: params[:image].tempfile, filename: params[:image].original_filename, content_type: params[:image].content_type)

      url = url_for(message.image)

      message.update(image_url: url)

    end


    # message.image.attach(io: params[:image].tempfile, filename: params[:image].filename, content_type:params[:image].content_type)

    conversation = Conversation.find(params[:conversation_id])



    # url_for(message.image)


    # url_for_direct_upload(expires_in: 314532343678,  content_type: "image/jpeg" , content_length: 1, checksum: message.image)
    # url(expires_in: 314532343678,  content_type: "image/jpeg" , content_length: 1, checksum: message.image)

    # if message.image.attached?
    #   message.image.attach(params[:image])
    # end

    if message.save
      broadcastConversation(message, conversation.id)
    end

  end

  private

  def message_params
    params.require(:message).permit(:text, :conversation_id, :image)
  end
end
