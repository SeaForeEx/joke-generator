import renderToDOM from '../utils/renderToDom';

const jokePunchlineButton = () => {
  const domString = `
  <button type="button" class="btn btn-primary joke-btn" id="punchline">JOKE PUNCHLINE</button>
  `;

  renderToDOM('#joke-punchline-button', domString);
};

export default jokePunchlineButton;
