import React from 'react';

class MovieForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    // Lógica para envio do formulário
  }

  updateMovie() {
    // Lógica para atualização do filme
  }

  renderTitleInput() {

    return (
      <div>
        Title Input
      </div>
    );
  }

  renderSubtitleInput() {

    return (
      <div>
        Subtitle Input
      </div>
    );
  }

  renderImagePathInput() {

    return (
      <div>
        Image path Input
      </div>
    );
  }

  renderStorylineInput() {

    return (
      <div>
        Storyline Input
      </div>
    );
  }

  renderGenreSelection() {

    return (
      <div>
        Genre Input
      </div>
    );
  }

  renderRatingInput() {

    return (
      <div>
        Rating Input
      </div>
    );
  }

  renderSubmitButton() {
    return (
      <div>
        Submit Form
      </div>
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
