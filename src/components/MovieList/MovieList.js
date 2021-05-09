import { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import s from './MovieList.module.css';
import PropTypes from 'prop-types';

const MovieList = ({ movies, location }) => {
  return (
    <>
      <ul className={s.moviesPageContainer}>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={{ pathname: `/movies/${movie.id}`, state: location }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

MovieList.defaultProps = {
  title: '',
  id: 0,
  location: null,
};

MovieList.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.number,
  }),
};

export default withRouter(MovieList);
