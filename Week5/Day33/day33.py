# Using a for loop to print the square of each number from 1 to 5
print("Squares of numbers from 1 to 5:")
for i in range(1, 6):
    print(f"{i} squared is {i*i}")

print()

# Using a while loop to print the cube of each number from 1 to 3
print("Cubes of numbers from 1 to 3:")
num = 1
while num <= 3:
    print(f"{num} cubed is {num*num*num}")
    num += 1

print()

# Creating a list of favorite books and using a for loop to print each book's title
favorite_books = ["To Kill a Mockingbird", "1984", "Pride and Prejudice", "The Great Gatsby", "Harry Potter"]
print("List of favorite books:")
for book in favorite_books:
    print(book)

print()

# Using a while loop to continuously ask the user to enter a number until they enter 0
total = 0
while True:
    num = int(input("Enter a number (enter 0 to finish): "))
    if num == 0:
        break
    total += num

print(f"The sum of all entered numbers is: {total}")
