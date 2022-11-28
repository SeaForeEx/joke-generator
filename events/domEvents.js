import jokePunchlineButton from '../buttons/jokePunchlineButton';
import jokeSetupButton from '../buttons/jokeSetupButton';
import newJokeButton from '../buttons/newJokeButton';
import clearDom from '../utils/clearDom';
import clearDom2 from '../utils/clearDom2';
import makeJoke from './makeJoke';
import showPunchline from './showPunchline';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('setup')) {
      clearDom();
      // const domString = `
      // This is the setup playa!
      // `;
      // renderToDOM('#joke-setup', domString);
      makeJoke();
      jokePunchlineButton();
    }

    if (e.target.id.includes('punchline')) {
      clearDom();
      // const domString = `
      // This is the punchline playa!
      // `;
      // renderToDOM('#joke-punchline', domString);
      showPunchline();
      newJokeButton();
    }

    if (e.target.id.includes('new-joke')) {
      clearDom();
      clearDom2();
      jokeSetupButton();
    }
  });
};

export default domEvents;
