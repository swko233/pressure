class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.string :schedule
      t.date :deadline
      t.date :start_date
      t.integer :real_time
      t.integer :user_id

      t.timestamps
    end
  end
end
