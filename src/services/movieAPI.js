import data from './movieData';

localStorage.setItem('movies', JSON.stringify(data));

const readMovies = () => JSON.parse(localStorage.getItem('movies'));

const saveMovies = (movies) => localStorage.setItem('movies', JSON.stringify(movies));

const TIME_OUT = 2000;

export const getMovies = () => (
  new Promise((resolve) => {
    setTimeout(() => {
      const movies = readMovies();
      resolve(movies);
    }, TIME_OUT);
  })
);

export const getMovie = (movieId) => {
  const movie = readMovies().find((mov) => mov.id === parseInt(movieId, 10));

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(movie);
    }, TIME_OUT);
  });
};

export const updateMovie = (updatedMovie) => (
  new Promise((resolve) => {
    const movies = readMovies().map((movie) => {
      if (movie.id === parseInt(updatedMovie.id, 10)) {
        return { ...movie, ...updatedMovie };
      }
      return movie;
    });
    saveMovies(movies);
    // Simula o tempo de resposta
    setTimeout(() => {
      resolve('OK');
    }, TIME_OUT);
  })
);

export const createMovie = (movieData) => (
  new Promise((resolve) => {
    let movies = readMovies();
    const nextId = movies[movies.length - 1].id + 1;
    const newMovie = { ...movieData, id: nextId };
    movies = [...movies, newMovie];
    saveMovies(movies);
    // Simula o tempo de resposta
    setTimeout(() => {
      resolve('OK');
    }, TIME_OUT);
  })
);

export const deleteMovie = (movieId) => {
  let movies = readMovies();
  movies = movies.filter((movie) => movie.id !== parseInt(movieId, 10));
  saveMovies(movies);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ status: 'OK' });
    }, TIME_OUT);
  });
};
