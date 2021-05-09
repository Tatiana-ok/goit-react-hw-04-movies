import { Component, Route } from 'react';
// import MoviesPage from '../MoviesPage/MoviesPage';
import s from './SearchBar.module.css';

class SearchBar extends Component {
  state = {
    search: '',
  };

  onChange = e => {
    this.setState({ search: e.currentTarget.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.search);
  };

  render() {
    return (
      <>
        <form onSubmit={this.onSubmit}>
          <input
            className={s.input}
            type="text"
            autoComplete="off"
            autoFocus
            value={this.state.search}
            onChange={this.onChange}
            placeholder="Search movies"
          />
          <button type="submit">
            <span>Search</span>
          </button>
        </form>
      </>
    );
  }
}
export default SearchBar;
