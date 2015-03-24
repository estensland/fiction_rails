module FamilyTreeHelper
  def family_tree_process(node, start = false)
    if node.is_a?(Hash)
      if node[:child_store]
        family_tree_process(node[:children])
      else
        content_tag(:li, "#{node[:bailic_name]} <br> #{node[:native_name]}".html_safe, class: node[:parented] ? "parented" : "parentless")
      end
    else
      if start
        content_tag(:ul, (node.map{|n| family_tree_process(n)}).join.html_safe, class: 'family_tree')
      else
        content_tag(:li, (["<ul class='children'>"] + node.map{|n| family_tree_process(n)} + ["</ul>"]).join.html_safe, class: 'marriage')
      end
    end
  end
end
