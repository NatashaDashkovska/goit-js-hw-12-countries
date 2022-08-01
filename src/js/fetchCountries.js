import renderCountryInfo from './renderResponse';

export default function fetchCountries(searchQuery) {
  fetch(`https://restcountries.com/v2/name/${searchQuery}`)
    .then(res => res.json())
    .then(next => {
      renderCountryInfo(next);
      console.log(next);
    })
    .catch(err => console.log(error));
}
