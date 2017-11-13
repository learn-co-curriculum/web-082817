class ApplicationController < ActionController::API

  before_action :authorized


  def encode(payload)
    # if at any point JWT changes we only change in one place
    JWT.encode(payload, "ilovedragons")
  end

  def decode(token)

    begin
      JWT.decode(token, "ilovedragons")
    rescue JWT::DecodeError
      []
    end

  end


  def token

    if request.headers["Authorization"]
      request.headers["Authorization"].split(" ")[1]
    else
      nil
    end
  end


  def decoded_token
    if token
      decode(token)
    else
      []
    end
     # an array with the user_id and the jwt header
  end


  def current_user
    if !decoded_token.empty?
      user_id = decoded_token[0]["user_id"]
      user = User.find(user_id)
    else
      nil
    end
  end


  def logged_in?
    !!current_user
  end


  def authorized
    render json: { message: "Log in" } unless logged_in?
  end




  # encode
  # decode
  # decoded_token
  # current_user
  # logged_in?

end
