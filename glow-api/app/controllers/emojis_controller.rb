class EmojisController < ApplicationController
  def index
    @emojis = Emoji.all
    render json: @emojis
  end
end
