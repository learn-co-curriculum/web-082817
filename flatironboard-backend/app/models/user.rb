class User < ApplicationRecord
  has_secure_password
  validates :username, uniqueness: true
  has_many :user_labs
  has_many :labs, through: :user_labs
  
  
end

