module StationAgentHelper
  def sa_link(model, route = :show, params = {})
    params.merge(sa_model: @model.class, sa_id: @model.id)
    if route == :show
      sa_path(params)
    elsif route == :edit
      sa_edit_path(params)
    elsif route == :update
      sa_update_path(params)
    else
      error = 'Invalid route provided to sa_link!'
      if route.is_a?(Symbol)
        error << ' Must be either: :show, :edit, or :update.'
      else
        error << ' It must be a symbol! Instead, a #{route.class} was provided.'
      end
      raise error
    end
  end
end