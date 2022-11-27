const clearDom = () => {
  document.querySelector('#joke-setup-button').innerHTML = '';
  document.querySelector('#joke-punchline-button').innerHTML = '';
  document.querySelector('#new-joke-button').innerHTML = '';
};

export default clearDom;
