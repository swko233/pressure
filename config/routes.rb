Rails.application.routes.draw do

  root 'tops#top'
  # root 'root#top'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :tasks
  resources :users, only:[:show]
end