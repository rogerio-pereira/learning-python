# def say_hello(name):
#     print(f"Calling a function, your name is {name}!")

# def sum(a, b):
#     return a + b

# name = "Rogerio"
# active = True

# print(f"Hello, {name}! Active status is {active}.");    #f before " formats the string with variables
# say_hello(name) # Call the function


# total = sum(5, 10)  # Call the function that returns a value
# print(f"The total sum is: {total}")

def normalize_plate(plate):
    # Normalize a vehicle plate by removing spaces and converting to uppercase.
    return plate.replace(" ", "").upper()   # I can't break lines here

plate = input("License Plate? ")
normalized_plate = normalize_plate(plate)
print(f"Normalized Plate: {normalized_plate}")
