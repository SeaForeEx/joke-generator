import renderToDOM from '../utils/renderToDom';

const welcome = () => {
  const domString = `
  <h6>c4's Dad Joke Emporium</h6>
  `;

  renderToDOM('#welcome', domString);
};

export default welcome;
