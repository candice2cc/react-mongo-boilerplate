/* eslint-disable import/no-extraneous-dependencies */
require('es6-promise').polyfill();
require('isomorphic-fetch');

export function getParams(json) {
  let query;
  if (typeof URLSearchParams !== 'undefined') {
    query = new URLSearchParams();
    Object.keys(json).forEach(key => {
      query.append(key, json[key]);
    });
  } else {
    query = '';
    Object.keys(json).forEach(key => {
      query = `${query + key}=${json[key]}&`;
    });
    if (query.length > 1) {
      query = query.slice(0, query.length - 1);
    }
  }
  return query;
}

export function buildGetPromise(url, data) {
  let search = '';
  if (data) {
    search = `?${getParams(data)}`;
  }

  return fetch(url + search, {
    credentials: 'same-origin',
    cache: 'no-cache',
    redirect: false
  }).then(res => res.json());
}

export function buildPostPromise(url, data) {
  return fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    credentials: 'same-origin',
    cache: 'no-cache',
    body: getParams(data)
  }).then(res => res.json());
}

export function buildCsrfPostPromise(url, data) {
  return buildPostPromise(url, {
    ...data,
    token: sessionStorage.getItem('token')
  });
}
