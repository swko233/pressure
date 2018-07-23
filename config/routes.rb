Rails.application.routes.draw do

  root 'tops#top'
  # root 'root#top'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :tasks
  get 'complete/task/:id' => 'tasks#complete',as:'complete_task'
  get 'failed/task/:id' => 'tasks#failed',as:'failed_task'
  resources :users, only:[:show]
end
