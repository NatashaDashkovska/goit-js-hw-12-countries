import countryTemplate from '../templates/countryInfo';
import countriesListTemplate from '../templates/countriesList';

import { error } from '@pnotify/core';
import { defaultModules } from '@pnotify/core';
import * as PNotifyBootstrap3 from '@pnotify/bootstrap3';
defaultModules.set(PNotifyBootstrap3, {});

const cardRef = document.querySelector('.card');

export default function renderCountryInfo(object) {
  cardRef.textContent = '';
  if (object.length === 0) {
    console.log('%c${write something}', 'color:red; font-size26px');
    return;
  }

  if (object.length > 1 && object.length < 10) {
    let mas = [];
    object.map(elem => mas.push(elem.name));
    cardRef.insertAdjacentHTML('beforeend', countriesListTemplate(mas));
  } else if (object.length >= 10) {
    error({
      title: 'Error!',
      text: 'Too many matches found. Please enter a more specific query!',
    });
  } else {
    cardRef.insertAdjacentHTML('beforeend', countryTemplate(object));
  }
}
