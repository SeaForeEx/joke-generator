import renderToDOM from '../utils/renderToDom';

const jokeSetupButton = () => {
  const domString = `
  <button type="button" class="btn btn-danger joke-btn" id="setup">JOKE SETUP</button>
  `;

  renderToDOM('#joke-setup-button', domString);
};

export default jokeSetupButton;
