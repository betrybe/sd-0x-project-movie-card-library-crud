import React from 'react';
import PropTypes from 'prop-types';

class MovieForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props.movie };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { onSubmit } = this.props;
    onSubmit(this.state);
  }

  updateMovie(field, newValue) {
    this.setState({ [field]: newValue });
  }

  renderTitleInput() {
    const { title } = this.state;

    return (
      <div></div>
    );
  }

  renderSubtitleInput() {
    const { subtitle } = this.state;

    return (
      <div></div>
    );
  }

  renderImagePathInput() {
    const { imagePath } = this.state;

    return (
      <div></div>
    );
  }

  renderStorylineInput() {
    const { storyline } = this.state;

    return (
      <div></div>
    );
  }

  renderGenreSelection() {
    const { genre } = this.state;

    return (
      <div></div>
    );
  }

  renderRatingInput() {
    const { rating } = this.state;

    return (
      <div></div>
    );
  }

  renderSubmitButton() {
    return (
      <div></div>
    );
  }

  render() {
    return (
      <form>
        {this.renderTitleInput()}
        {this.renderSubtitleInput()}
        {this.renderImagePathInput()}
        {this.renderStorylineInput()}
        {this.renderGenreSelection()}
        {this.renderRatingInput()}
        {this.renderSubmitButton()}
      </form>
    );
  }
}

export default MovieForm;
