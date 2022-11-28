import renderToDOM from '../utils/renderToDom';

const showPunchline = (delivery) => {
  renderToDOM('#joke-punchline', delivery);
};

export default showPunchline;
