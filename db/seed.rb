#q = CSV.open(f).read.first.map.with_index{|r, i| r && r.length == 3 && r.upcase == r ? [r, CSV.open(f).read.first[i + 1]] : nil}
