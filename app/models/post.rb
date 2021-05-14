class Post < ApplicationRecord
  belongs_to :garden
  belongs_to :user
  has_many :comments, dependent: :destroy
end
