def calculate_area(length, width):
    return length * width

rectangle_area = calculate_area(8, 5)
print("Area of rectangle with dimensions 8x5:", rectangle_area)

person_info = {
    "name": "Karthi",
    "age": 21,
    "city": "Narasaraopet"
}

def print_person_info(person):
    print("Person's Information:")
    print("Name:", person["name"])
    print("Age:", person["age"])
    print("City:", person["city"])

print_person_info(person_info)
