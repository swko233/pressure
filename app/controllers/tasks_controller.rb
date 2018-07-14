class TasksController < ApplicationController
  def index
    @tasks = Task.all
  end

  def show
    @task = Task.find(params[:id])
  end

  def edit
  end

  def new
  	@task = Task.new
  end

  def create
  	@task = current_user.tasks.new(task_params)
  	if @task.save
  		redirect_to task_path(@task.id)
  	else
  		redirect_to tasks_path
  	end
  end

   def destroy
    task = Task.find(params[:id])
    task.destroy
    redirect_to tasks_path
  end


  private

  def task_params
  	params.require(:task).permit(:schedule, :deadline, :real_time)
  end

end
