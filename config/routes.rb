Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users
  

  get '/submissions', to: "homes#index"

  namespace :api do 
    namespace :v1 do 
      resources :submissions, only: [:index]
    end 
  end 
end