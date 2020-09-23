import React, { Component } from 'react';

import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      shouldRedirect: false,
      movie: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({
      isLoading: true,
    }, async () => {
      const movie = await movieAPI.getMovie(this.props.match.params.id);
      this.setState({
        isLoading: false,
        movie,
      });
    });
  }

  handleSubmit(updatedMovie) {
    this.setState({
      isLoading: true,
    }, async () => {
      const movie = await movieAPI.updateMovie(updatedMovie);
      this.setState({
        isLoading: false,
      });
      this.props.history.push('/');
    });
  }

  render() {
    const { isLoading, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      // Redirect
    }

    if (isLoading) {
      return <Loading />;
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default EditMovie;
