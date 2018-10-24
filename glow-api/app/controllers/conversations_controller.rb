class ConversationsController < ApplicationController
  def index
    @conversations = Conversation.all
    render json: @conversations
  end

  def show
    @conversation = Conversation.find(params[:id])
    render json: @conversation
  end

  def create
    @conversation = Conversation.new(conversation_params)
    if @conversation.save
      @user = User.find(params[:user_id])
      @user.update(conversation_id: @conversation.id)
      @conversation.users.push(@user)
      # serialized_data = ActiveModelSerializers::Adapter::Json.new(
      #   ConversationSerializer.new(conversation)
      # ).serializable_hash
      # ActionCable.server.broadcast 'conversations_channel', serialized_data
      # head :ok
    end
    render json: @conversation
  end

  private

  def conversation_params
    params.require(:conversation).permit(:title, :user_id)
  end
end
