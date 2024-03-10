# Information about the library
library_name = "Pythonic Library"
library_location = "Cityville"

# List of books available in the library
books = [
    {"title": "Introduction to Python", "author": "John Python", "genre": "Programming"},
    {"title": "Python for Beginners", "author": "Alice Coder", "genre": "Programming"},
    {"title": "Mystery of Pythonic Code", "author": "Sherlock Hacker", "genre": "Mystery"},
]

# Dictionary representing the library staff
library_staff = {
    "librarian": {"name": "Eva Librarian", "age": 35, "role": "Librarian"},
    "assistant": {"name": "Alex Assistant", "age": 28, "role": "Assistant Librarian"},
}

# Control Flow
print("Scenarios based on Control Flow:")
for book in books:
    if book["genre"] == "Programming":
        print(f"The book '{book['title']}' is relevant to programming enthusiasts.")

# Functions and Dictionaries
def print_staff_info(staff_dict):
    print("Staff Information:")
    for role, info in staff_dict.items():
        print(f"Role: {role.capitalize()}")
        print(f"Name: {info['name']}")
        print(f"Age: {info['age']}")
        print(f"Role: {info['role']}")
        print()

print("\nInformation about the librarian:")
print_staff_info({"librarian": library_staff["librarian"]})

# User Interaction
favorite_genre = input("\nEnter your favorite book genre: ")
found_books = []
for book in books:
    if book["genre"] == favorite_genre:
        found_books.append(book["title"])

if found_books:
    print(f"\nThe library has the following books in the genre '{favorite_genre}':")
    for title in found_books:
        print(title)
else:
    print(f"\nThe library doesn't have books in the genre '{favorite_genre}'.")
