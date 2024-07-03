import React from 'react';
import './Profile.scss'; // Import your CSS file
import MovieListProfile from './MovieListProfile'; // Adjust path based on your project structure
import { category } from '../../api/tmdbApi';

const Profile = ({ username = 'User', favoriteMovies = ['Inception', 'The Dark Knight', 'Interstellar'], favoriteTVShows = ['Family Guy' , 'The Simpsons'] }) => {
    return (
        <div className="profile-container">
            <div className="profile-header">
                <h1>{username}'s Profile</h1>
                <button className="edit-button">Edit Profile</button>
            </div>
            <div className="profile-content">
                <div className="profile-section">
                    <h2>Favorite Movies</h2>
                    {favoriteMovies.length > 0 ? (
                        <MovieListProfile movieList={favoriteMovies} category={category.movie} />
                    ) : (
                        <p className="no-movies">No favorite movies listed.</p>
                    )}
                </div>
                <div className="profile-section">
                    <h2>Favorite TV Shows</h2>
                    {favoriteTVShows.length > 0 ? (
                        <MovieListProfile movieList={favoriteTVShows} category={category.tv} />
                    ) : (
                        <p className="no-movies">No favorite TV shows listed.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;
