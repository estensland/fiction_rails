module FamilyTreeHelper
  def family_tree_process(node)
    if node.is_a?(Hash)
      if node[:child_store]
        family_tree_process(node[:children])
      else
        content_tag(:li, node[:bailic_name], class: node[:parented] ? "parented" : "parentless")
      end
    else
      content_tag(:li, (["<ul class='children'>"] + node.map{|n| family_tree_process(n)} + ["</ul>"]).join.html_safe, class: 'marriage')
    end
  end
end
