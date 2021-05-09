import { Component } from 'react';
import Axios from 'axios';
import s from './Cast.module.css';
import { PropTypes } from 'prop-types';

const API_KEY = 'b2ac53e8621d02ada7802ecd2ad369f6';

export default class Cast extends Component {
  state = {
    id: null,
    cast: [],
    noResults: false,
    error: null,
  };

  async componentDidMount() {
    try {
      const response = await Axios.get(
        `https://api.themoviedb.org/3/movie/${this.props.movieId}/credits?api_key=${API_KEY}&language=en-US`,
      );
      if (response.data.cast.length > 0) {
        this.setState({ ...response.data });
      } else {
        this.setState({ noResults: true });
      }
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  render() {
    function photoActor(profile_path) {
      if (profile_path === null) {
        return 'http://dummyimage.com/200x140/c0c0c0&text=No+photo';
      } else {
        return `https://image.tmdb.org/t/p/w300/${profile_path}`;
      }
    }

    return (
      <>
        <ul className={s.castContainer}>
          {this.state.noResults ? (
            <p>We don`t have information</p>
          ) : (
            this.state.cast.map(c => (
              <li key={c.id}>
                <p>{c.name}</p>
                <img
                  className={s.castImg}
                  src={photoActor(c.profile_path)}
                  alt={c.name}
                />
                <p>{c.character}</p>
              </li>
            ))
          )}
        </ul>
        {this.state.error && <p>{this.state.error}</p>}
      </>
    );
  }
}

Cast.defaultProps = {
  img: '',
};

Cast.propTypes = {
  credit: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    img: PropTypes.string,
    character: PropTypes.string.isRequired,
  }),
};
