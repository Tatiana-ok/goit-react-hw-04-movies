import { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';
import s from './MovieDetailsPage.module.css';

const API_KEY = 'b2ac53e8621d02ada7802ecd2ad369f6';
// const { movieId } = this.props.match.params;

class MovieDetailsPage extends Component {
  state = {
    id: null,
    poster_path: null,
    release_date: null,
    popularity: null,
    overview: null,
    genres: [],
    cast: false,
    reviews: false,
    movieId: this.props.match.params.movieId,
    error: null,
  };

  async componentDidMount() {
    try {
      const response = await Axios.get(
        `https://api.themoviedb.org/3/movie/${this.state.movieId}?api_key=${API_KEY}&language=en-US`,
      );
      this.setState({ ...response.data });
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  onToggleCast = () => {
    this.setState({ reviews: false });
    this.setState({ cast: !this.state.cast });
  };

  onToggleReviews = () => {
    this.setState({ cast: false });
    this.setState({ reviews: !this.state.reviews });
  };

  handleGoBack = () => {
    const { location, history } = this.props;
    if (location?.state?.from) {
      console.log(location.state.from);
      return history.push(this.location.state.from);
    }
    history.push('/goit-react-hw-04-movies');
  };

  render() {
    const {
      title,
      release_date,
      poster_path,
      popularity,
      overview,
      genres,
      cast,
      reviews,
      movieId,
      error,
    } = this.state;
    const userScore = Math.round(popularity);

    function poster(poster_path) {
      if (poster_path === null) {
        return 'http://dummyimage.com/300x450/c0c0c0&text=No+poster';
      } else {
        return `https://image.tmdb.org/t/p/w300/${poster_path}`;
      }
    }

    return (
      <>
        <button className={s.btnBack} type="button" onClick={this.handleGoBack}>
          <span role="img" aria-label="left-arrow">
            ⬅
          </span>
          Go back
        </button>
        {error ? (
          <p>{error}</p>
        ) : (
          <div>
            <div className={s.mainPart}>
              <img className={s.poster} src={poster(poster_path)} alt={title} />
              <div className={s.filmInfo}>
                <h1>
                  {title} ({release_date})
                </h1>
                <p className={s.score}>User Score: {userScore}</p>
                <h2>Overview</h2>
                <p>{overview}</p>
                <h3>Genres</h3>
                <span className={s.genresItem}>
                  {genres.map(genre => (
                    <p key={genre.id}>{genre.name}</p>
                  ))}
                </span>
              </div>
            </div>
            <div className={s.additional}>
              <ul>
                <h4>Additional information</h4>
              </ul>
              <li>
                <Link
                  to={`/movies/${movieId}/cast`}
                  onClick={this.onToggleCast}
                >
                  Cast
                </Link>
              </li>
              <li>
                <Link
                  to={`/movies/${movieId}/reviews`}
                  onClick={this.onToggleReviews}
                >
                  Reviews
                </Link>
              </li>
              {cast && <Cast movieId={movieId} />}
              {reviews && <Reviews movieId={movieId} />}
            </div>
          </div>
        )}
      </>
    );
  }
}

export default MovieDetailsPage;
