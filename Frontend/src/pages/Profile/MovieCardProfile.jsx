import React from 'react';
import './MovieCardProfile.scss';
import { Link } from 'react-router-dom';
import Button from '../../components/button/Button';
import { category } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

const MovieCardProfile = ({ item, category, onRemove }) => {
    const link = `/${category}/${item.id}`;
    const bg = item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : '';

    const handleRemove = () => {
        onRemove(item.id); // Assuming item.id uniquely identifies the movie
    };

    return (
        <div className="movie-card-container">
            <div className="movie-card" style={{backgroundImage: `url(${bg})`}}>
                <Link to={link}>
                    <Button>
                        <i className="bx bx-play"></i>
                    </Button>
                </Link>
                <Button onClick={handleRemove} className="remove-button">
                    Remove
                </Button>
            </div>
            <div className="movie-name">
                <h3>{item.title || item.name}</h3>
            </div>
        </div>
    );
}

export default MovieCardProfile;
