from util.license_plate import normalize_plate
import pytest

LICENSE_PLATE_TESTS = [
    ("abc 1234", "ABC1234"),
    ("  ab c 1234  ", "ABC1234"),
    ("ABC1234", "ABC1234"),
    ("", ""),
    ("   ", ""),
    ("  s-a ", "S-A"),
]

@pytest.mark.parametrize("plate, expected", LICENSE_PLATE_TESTS)
def test_saniteze_plate(plate, expected):
    normalized = normalize_plate(plate)
    assert normalized == expected