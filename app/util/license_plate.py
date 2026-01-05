# In Python we don't need a class, because this is like a PHP helper, 
# it doesn't save state (no properties), just functions.
# it doesn't need to be instantiated.
# it doesn't need to extend anything.
# it doesn't need to implement any interface.
# it just needs to be imported and used.

def normalize_plate(plate):
    # Normalize a vehicle plate by removing spaces and converting to uppercase.
    return plate.replace(" ", "").upper()   # I can't break lines here