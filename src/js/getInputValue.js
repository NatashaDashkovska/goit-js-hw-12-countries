import debounce from 'lodash.debounce';
import fetchCountries from './fetchCountries';
const inputRef = document.querySelector('.input');

inputRef.addEventListener(
  'input',
  debounce(event => {
    fetchCountries(event.target.value);
  }, 500)
);
