Rails.application.routes.draw do
  resources :conversations, only: [:index, :create]
  resources :messages, only: [:create, :index, :show, :update]
  resources :emojis, only: [:index]
  mount ActionCable.server => '/cable'
end
