import React, { useState, useEffect } from 'react';
import MovieCardProfile from './MovieCardProfile'; // Adjust path based on your project structure
import tmdbApi, { category } from '../../api/tmdbApi'; // Adjust path based on your project structure
import './MovieListProfile.scss'; // Import your CSS file

const MovieListProfile = ({ movieList }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const movieDetails = await Promise.all(
                    movieList.map(async (movieName) => {
                        const params = { query: movieName };
                        const response = await tmdbApi.search(category.movie, { params });
                        return response.results[0]; // Assuming the first search result is the closest match
                    })
                );
                setMovies(movieDetails);
            } catch (error) {
                console.error('Error fetching movie details:', error);
                // Handle error state or display a message to the user
            }
        };

        fetchMovieDetails();
    }, [movieList]);

    const removeMovie = (movieId) => {
        const updatedMovies = movies.filter(movie => movie.id !== movieId);
        setMovies(updatedMovies);
        // You can add further logic here to update the backend or storage for removing the movie
    };

    return (
        <div className="movie-list-profile">
            <div className="movie-list">
                {movies.map((movie, index) => (
                    <MovieCardProfile
                        key={index}
                        category={category.movie}
                        item={movie}
                        onRemove={removeMovie}
                    />
                ))}
            </div>
        </div>
    );
};

export default MovieListProfile;