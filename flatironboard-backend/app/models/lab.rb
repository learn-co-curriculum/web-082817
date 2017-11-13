class Lab < ApplicationRecord
  validates :title, uniqueness: true
  has_many :user_labs
  has_many :users, through: :user_labs

end
