import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Axios from 'axios';
import s from './HomePage.module.css';

const API_KEY = 'b2ac53e8621d02ada7802ecd2ad369f6';

class HomePage extends Component {
  state = {
    films: [],
    error: null,
  };

  async componentDidMount() {
    try {
      const response = await Axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`,
      );
      this.setState({ films: response.data.results });
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  render() {
    return (
      <div className={s.HomePage}>
        <h1>Trending today</h1>
        <ul>
          {this.state.films.map(film => {
            return (
              <li key={film.id}>
                <NavLink className={s.Fims} to={`/movies/${film.id}`}>
                  {film.title || film.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        {this.state.error && <p>{this.state.error}</p>}
      </div>
    );
  }
}
export default HomePage;
