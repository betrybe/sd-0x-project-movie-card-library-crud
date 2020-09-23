import React, { Component } from 'react';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import { Link } from 'react-router-dom';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      movie: {},
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.setState({ isLoading: true }, async () => {
      const movie = await movieAPI.getMovie(id);
      this.setState({
        isLoading: false,
        movie,
      });
    });
  }

  render() {
    const {
      isLoading,
      movie: {
        title, storyline, imagePath, genre, rating, subtitle, id,
      },
    } = this.state;

    if (isLoading) {
      return <Loading />;
    }

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <h2>{`Title: ${title}`}</h2>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <button type="button" onClick={() => movieAPI.deleteMovie(id)}>
          <Link to="/">DELETAR</Link>
        </button>
      </div>
    );
  }
}

export default MovieDetails;
