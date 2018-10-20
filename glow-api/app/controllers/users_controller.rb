class UsersController < ApplicationController
    def index
      @users = User.all
      render json: @users
    end

    def show
        @user = User.find(params[:id])
        render json: @user 
    end
  
    def create
      @user = User.new(user_params)
      @user.save
    end
  
    private
  
    def user_params
      params.require(:user).permit(:username)
    end
  end
  