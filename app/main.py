def sayHello(name):
    print(f"Calling a function, your name is {name}!")

def sum(a, b):
    return a + b

name = "Rogerio"
active = True

print(f"Hello, {name}! Active status is {active}.");    #f before " formats the string with variables
sayHello(name) # Call the function


total = sum(5, 10)  # Call the function that returns a value
print(f"The total sum is: {total}")