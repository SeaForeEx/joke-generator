import renderToDOM from '../utils/renderToDom';

const newJokeButton = () => {
  const domString = `
  <button type="button" class="btn btn-success" id="new-joke">NEW JOKE</button>
  `;

  renderToDOM('#new-joke-button', domString);
};

export default newJokeButton;
