Rails.application.routes.draw do
  devise_for :users
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'
  root 'welcome#index'
  get 'sa/' => 'station_agent#show_all_models', as: :sa
  get 'sa/initalize_anything' => 'station_agent#initalize_anything', as: :sa_initialize
  get 'sa/:sa_model' => 'station_agent#show_all_of_a_model', as: :sa_model
  get 'sa/:sa_model/:sa_id' => 'station_agent#show_anything', as: :sa_show
  get 'sa/:sa_model/:sa_id/edit' => 'station_agent#edit_anything', as: :sa_edit
  get 'sa/:sa_model/:sa_id/new' => 'station_agent#new_anything', as: :sa_new
  post 'sa/:sa_model/:sa_id' => 'station_agent#update_anything', as: :sa_update

  get 'characters/' => 'characters#index', as: :characters
  get 'characters/:id' => 'characters#show', as: :character

  get 'houses/' => 'houses#index', as: :houses
  get 'houses/:id' => 'houses#show', as: :house

  get 'realms/' => 'realms#index', as: :realms
  get 'realms/:id' => 'realms#show', as: :realm

  get 'peerages/' => 'peerages#index', as: :peerages

  get 'timelines/' => 'timelines#index', as: :timelines
  get 'timelines/:id' => 'timelines#show', as: :timeline

  get 'timeline_events/' => 'timeline_events#index', as: :timeline_events
  get 'timeline_events/:id' => 'timeline_events#show', as: :timeline_event

  namespace :api, defaults: {format: :json} do
		resources :timeline_events, only: [:index, :show]
		resources :timelines, only: [:index, :show]
		resources :realms, only: [:index, :show]
		resources :houses, only: [:index, :show]
		resources :characters, only: [:index, :show]
  end
end
