import countryTemplate from '../templates/countryInfo';
import countriesListTemplate from '../templates/countriesList';

const renderRef = document.querySelector('.card');
export default function renderCountryInfo(obj) {
  if (obj.length < 0) {
    console.log('%c${write something}', 'color:red; font-size26px');
    return;
  }

  if (obj.length > 1 || obj.length < 10) {
    let mas = [];
    obj.map(elem => mas.push(elem.name));
    renderRef.insertAdjacentHTML('beforeend', countriesListTemplate(mas));
  } else {
    renderRef.insertAdjacentHTML('beforeend', countryTemplate(obj));
  }
}
