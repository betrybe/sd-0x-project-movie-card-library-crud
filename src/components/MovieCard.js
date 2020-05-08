import React from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const {
      title, storyline, imagePath, id,
    } = movie;
    return (
      <div data-testid='movie-card'>
      </div>    
    );
  }
}

export default MovieCard;
