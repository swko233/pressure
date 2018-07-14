class Task < ApplicationRecord


	validates :schedule, presence: true
	validates :deadline, presence: true
	validates :real_time,presence: true
	# 型によるバリデーションも必要？


	belongs_to :user
end
