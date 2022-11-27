import jokeSetupButton from '../buttons/jokeSetupButton';
import welcome from '../pages/welcome';
import domEvents from '../events/domEvents';

const startApp = () => {
  welcome();
  jokeSetupButton();
  domEvents();
};

export default startApp;
