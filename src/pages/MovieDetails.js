import React, { Component } from 'react';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  render() {
    const { isLoading, movie } = this.state;
    // Change the condition to check the state
    if (true) return <Loading />;

    return (
      <div data-testid='movie-details'>
      </div>
    );
  }
}

export default MovieDetails;
