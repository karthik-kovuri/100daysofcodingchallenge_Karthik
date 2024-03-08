favorite_movies = ["Arya", "Bahubali", "Master", "Maharshi"]
favorite_movies.append("Warior")
release_years = (2004, 2015, 2021, 1994, 2019)
third_movie = favorite_movies[2]
third_movie_release_year = release_years[2]
print("Third movie:", third_movie)
print("Release year:", third_movie_release_year)
specific_movie = "Bahubali"

if specific_movie in favorite_movies:
    print(specific_movie, "is in the list of favorite movies.")
else:
    print(specific_movie, "is not in the list of favorite movies.")

friend_favorite_movies = ["RRR", "Bahubali", "Vikram"]
combined_list = favorite_movies + friend_favorite_movies
print("Combined list of favorite movies:", combined_list)
