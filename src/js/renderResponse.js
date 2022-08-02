import countryTemplate from '../templates/countryInfo';
import countriesListTemplate from '../templates/countriesList';

import { error } from '@pnotify/core';
import { defaultModules } from '@pnotify/core';
import * as PNotifyBootstrap3 from '@pnotify/bootstrap3';

defaultModules.set(PNotifyBootstrap3, {});

const renderRef = document.querySelector('.card');
export default function renderCountryInfo(obj) {
  if (obj.length < 0) {
    console.log('%c${write something}', 'color:red; font-size26px');
    return;
  }

  if (obj.length > 1 && obj.length < 10) {
    let mas = [];
    obj.map(elem => mas.push(elem.name));
    renderRef.insertAdjacentHTML('beforeend', countriesListTemplate(mas));
  } else if (obj.length >= 10) {
    error({
      title: 'Error!',
      text: 'Too many matches found. Please enter a more specific query!',
    });
  } else {
    renderRef.insertAdjacentHTML('beforeend', countryTemplate(obj));
  }
}
