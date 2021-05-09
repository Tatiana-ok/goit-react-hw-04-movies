import './App.css';
import { Component, Suspense, lazy } from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';

const HomePage = lazy(() => import('./components/HomePage/HomePage'));
const MoviesPage = lazy(() => import('./components/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('./components/MovieDetailsPage/MovieDetailsPage'),
);
const Cast = lazy(() => import('./components/Cast/Cast'));
const Reviews = lazy(() => import('./components/Reviews/Reviews'));

class App extends Component {
  onNavClick = e => {
    if (e.target.textContent === 'Home') {
      e.currentTarget.lastElementChild.classList.remove('active');
      e.currentTarget.firstElementChild.classList.add('active');
    } else {
      e.currentTarget.firstElementChild.classList.remove('active');
      e.currentTarget.lastElementChild.classList.add('active');
    }
  };

  render() {
    return (
      <div className="container-page">
        <nav>
          <ul className="container-nav" onClick={this.onNavClick}>
            <li className="nav-item home active">
              <Link to="/goit-react-hw-04-movies">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/goit-react-hw-04-movies/movies">Movies</Link>
            </li>
          </ul>
        </nav>
        <Suspense fallback={<h1>Загружаем...</h1>}>
          <Switch>
            <Route exact path="/goit-react-hw-04-movies" component={HomePage} />
            <Route
              path="/goit-react-hw-04-movies/movies"
              component={MoviesPage}
            />
            <Route path="/movies/:movieId" component={MovieDetailsPage} />
            <Route path="/movies/:movieId/cast" component={Cast} />
            <Route path="/movies/:movieId/reviews" component={Reviews} />
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

export default App;
