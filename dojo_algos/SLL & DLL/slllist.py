import Edward_Im_SLLists as listpack

list = listpack.SLLists()
list.add_to_end(3)
list.add_to_end(6)
list.add_to_end(9)
list.add_to_end(12)
list.add_to_end(15)
list.add_to_end(18)
# list.remove_mid_node(3)
# list.remove_end_node()
# list.remove_front_node()
list.print_all_val()
list.add_to_mid(12, 400)
print("-"*50)
list.print_all_val()
print("-"*50)
# list.reverse_list()
# list.print_all_val()
# list.index()