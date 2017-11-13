class UsersController < ApplicationController


  skip_before_action :authorized, only: [:create]

  def create

    @user = User.new(username: params[:username], password: params[:password])
    if @user.save
      payload = {user_id: @user.id}
      token = JWT.encode(payload, "ilovedragons")
      render json: {user:@user, jwt: token }
    else
      render json: { message: "Fail"}
    end

  end



  def me


    # if a user gets to this action
    # we should just show their information
    render json: current_user

  end


  def my_dogs

  end

end
