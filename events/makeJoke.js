import renderToDOM from '../utils/renderToDom';
import jokePromise from '../api/jokePromise';

const makeJoke = () => {
  jokePromise().then((response) => {
    const { setup, delivery } = response;
    document.querySelector('#main-container').addEventListener('click', (e) => {
      if (e.target.id.includes('setup')) {
        renderToDOM('#joke-setup', setup);
      }

      if (e.target.id.includes('punchline')) {
        renderToDOM('#joke-punchline', delivery);
      }
    });
  });
};

export default makeJoke;
