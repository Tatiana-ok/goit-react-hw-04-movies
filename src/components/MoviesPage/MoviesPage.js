import { Component } from 'react';
import Axios from 'axios';
import SearchBar from '../SearchBar/SearchBar';
import MovieList from '../MovieList/MovieList';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import queryString from 'query-string';

const API_KEY = 'b2ac53e8621d02ada7802ecd2ad369f6';

class MoviesPage extends Component {
  state = {
    search: '',
    movies: [],
    error: null,
    loading: false,
  };

  async componentDidMount() {
    try {
      const { query } = queryString.parse(this.props.location.search);
      if (query) {
        const response = await Axios.get(
          `https://api.themoviedb.org/3/movie/${query}?api_key=${API_KEY}&language=en-US`,
        );
        this.setState({ movies: response.data.results });
      }
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    try {
      const { query: prevQuery } = queryString.parse(prevProps.location.search);
      const { query: nextQuery } = queryString.parse(
        this.props.location.search,
      );
      if (prevQuery !== nextQuery) {
        const response = await Axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${nextQuery}&language=en-US&include_adult=false`,
        );
        this.setState({ movies: response.data.results });
        if (this.state.movies.length === 0) {
          toast.error('Nothing found');
        }
      }
    } catch (error) {
      this.setState({ error: error });
    }
  }

  handleChangeQuery = query => {
    this.setState({ search: query });
    this.props.history.push({
      ...this.props.location,
      search: `query=${query}`,
    });
  };

  render() {
    return (
      <>
        <SearchBar onSubmit={this.handleChangeQuery} />
        {this.state.movies.length > 0 && (
          <MovieList
            movies={this.state.movies}
            state={{ from: this.props.location }}
          />
        )}
        {this.state.error && <h1>{this.state.error}</h1>}
        <ToastContainer autoClose={2000} />
      </>
    );
  }
}
export default MoviesPage;
