from util.license_plate import normalize_plate

plate = input("License Plate? ")
normalized_plate = normalize_plate(plate)
print(f"Normalized Plate: {normalized_plate}")
