Rails.application.routes.draw do
  devise_for :users
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'
  root 'welcome#index'
  get 'sa/' => 'station_agent#show_all_models', as: :sa
  get 'sa/:sa_model' => 'station_agent#show_all_of_a_model', as: :sa_model
  get 'sa/:sa_model/:sa_id' => 'station_agent#show_anything', as: :sa_show
  get 'sa/:sa_model/:sa_id/edit' => 'station_agent#edit_anything', as: :sa_edit
  post 'sa/:sa_model/:sa_id' => 'station_agent#update_anything', as: :sa_update

  get 'characters/:id' => 'characters#show', as: :character

  get 'houses/' => 'houses#index', as: :houses
  get 'houses/:id' => 'houses#show', as: :house

  get 'realms/' => 'realms#index', as: :realms
  get 'realms/:id' => 'realms#show', as: :realm

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
