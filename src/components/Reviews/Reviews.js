import { Component } from 'react';
import Axios from 'axios';
import s from './Reviews.module.css';

const API_KEY = 'b2ac53e8621d02ada7802ecd2ad369f6';

export default class Reviews extends Component {
  state = {
    results: [],
    noResults: false,
  };

  async componentDidMount() {
    try {
      const response = await Axios.get(
        `https://api.themoviedb.org/3/movie/${this.props.movieId}/reviews?api_key=${API_KEY}&language=en-US`,
      );
      if (response.data.results.length > 0) {
        this.setState({ ...response.data });
      } else {
        this.setState({ noResults: true });
      }
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  render() {
    return (
      <>
        <ul className={s.reviewsContainer}>
          {this.state.noResults ? (
            <p>We don`t have any reviews for this movie</p>
          ) : (
            this.state.results.map(result => (
              <li key={result.id}>
                <p className={s.author}>Author: {result.author}</p>
                <p>{result.content}</p>
              </li>
            ))
          )}
        </ul>
        {this.state.error && <p>{this.state.error}</p>}
      </>
    );
  }
}
