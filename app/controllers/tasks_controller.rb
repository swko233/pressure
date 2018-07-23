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
    require "date"
  	@task = current_user.tasks.new(task_params)
    @task.start_date = Date.today
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

  def complete
    task = Task.find(params[:id])
    task.status = 1
    if task.save
      redirect_to user_path(current_user.id)
    else
      flash[:notice] = '保存に失敗しました'
      redirect_to tasks_path
    end
  end

  def failed
    task = Task.find(params[:id])
    task.status = 2
    if task.save
      redirect_to user_path(current_user.id)
    else
      flash[:notice] = '保存に失敗しました'
      redirect_to tasks_path
    end
  end


  private

  def task_params
  	params.require(:task).permit(:schedule, :deadline, :real_time)
  end

end
