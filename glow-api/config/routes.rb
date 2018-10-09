Rails.application.routes.draw do
  resources :conversations, only: [:index, :create]
  resources :messages, only: [:create, :index]
  resources :emojis, only: [:index]
  mount ActionCable.server => '/cable'
end
