import React from 'react';
import PropTypes from 'prop-types';
//import './Movie.css';
import 'nes.css/css/nes.min.css';

function Movie({ year, title, summary, poster, genres }) {
    return (
        <div className="nes-balloon from-left nes-pointer">
            <img src={poster} alt={title} title={title} />
            <div className="movie__data">
                <h3 className="nes-text is-success">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className="lists">
                    {genres.map((genre, index) => {
                        return (<li key={index} className="nes-list is-disc">{genre}</li>);
                    })}

                </ul>
                <p className="nes-btn is-primary">{summary.slice(0, 180)}...</p>
            </div>
        </div>
    );
}

Movie.prototypes = {
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
