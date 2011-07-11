class UsersController < ApplicationController
  def new
    @title = "Sign Up"
    @user = User.new
    @user.password = ""
  end
  def create
    @user = User.new(params[:user])
    if @user.save
      flash[:success] = "Welcome! You have successfully saved, msg courtesy of flash"
      redirect_to @user
    else
      @title = "Sign Up"
      render 'new'
    end
  end
  
  def show
    @user = User.find(params[:id])
    @title = @user.name
  end

end
