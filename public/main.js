// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';

const init = () => {
  document.querySelector('#app').innerHTML = `
  <h1>c4's Dad Joke Emporium</h1>
  <button class="btn btn-danger" id="joke">JOKE</button>
  `;
  console.warn('YOU ARE UP AND RUNNING!');

  document
    .querySelector('#click-me')
    .addEventListener('click', () => console.warn('You clicked that button!'));

  // USE WITH FIREBASE AUTH
  // ViewDirectorBasedOnUserAuthStatus();
};


getJoke().then((yourmomisataco) => {
  console.warn(yourmomisataco.setup);
  console.warn(yourmomisataco.delivery);
});

init();
