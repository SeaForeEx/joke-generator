import renderToDOM from '../utils/renderToDom';
import jokePromise from '../api/jokePromise';
import showPunchline from './showPunchline';
// const makeJoke = () => {
//   jokePromise().then((response) => {
//     const { setup, delivery } = response;
//     document.querySelector('#main-container').addEventListener('click', (e) => {
//       if (e.target.id.includes('setup')) {
//         renderToDOM('#joke-setup', setup);
//       } else if (e.target.id.includes('punchline')) {
//         renderToDOM('#joke-punchline', delivery);
//       }
//     });
//   });
// };

const makeJoke = () => {
  jokePromise().then((response) => {
    const { setup, delivery } = response;
    renderToDOM('#joke-setup', setup);
    showPunchline(delivery);
  });
};

export default makeJoke;
