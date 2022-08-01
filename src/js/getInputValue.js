import debounce from 'lodash.debounce';

const inputRef = document.querySelector('.input');

inputRef.addEventListener(
  'input',
  debounce(event => {
    console.log(event.target);
  }, 500)
);
