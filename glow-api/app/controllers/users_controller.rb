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
      if !User.exists?(username: user_params[:username])
        @user = User.create(user_params)
      end
    end
  
    private
  
    def user_params
      params.require(:user).permit(:username)
    end
  end
  