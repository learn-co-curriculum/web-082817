class AuthController < ApplicationController

  skip_before_action :authorized, only: [:create]

  def create
    @user = User.find_by(username: params[:username])
    if @user && @user.authenticate(params[:password])
      payload = {user_id: @user.id}
      token = JWT.encode(payload, "ilovedragons")

      render json: { user: @user, jwt: token}
      # you are who you say you are
    else
      # you're not
    end
  end

end
