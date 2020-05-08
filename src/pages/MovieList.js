import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div data-testid='movie-list'>
      </div>
    );
  }
}

export default MovieList;
