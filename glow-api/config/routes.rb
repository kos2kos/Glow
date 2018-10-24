Rails.application.routes.draw do
  resources :leaderboards
  resources :conversations, only: [:index, :create, :show, :update]
  resources :messages, only: [:create, :index, :show, :update]
  resources :emojis, only: [:index]
  resources :users, only: [:index, :show, :create]
  mount ActionCable.server => '/cable'
end
