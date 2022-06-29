import fetch from 'node-fetch';
import urls from '../config/urls';
import Header from '../helpers/headers';

const store = {
  postStore: async (params) => {
    const r = await fetch(`${urls.petstore}store/order`, { method: 'POST', headers: Header, body: JSON.stringify(params)});
    return r;
  },
  getStore1: async (params) => {
    const r = await fetch(`${urls.petstore}store/order/${params}`, { method: 'GET', headers: Header});
    return r;
  },
  deleteStore: async (params) => {
    const r = await fetch(`${urls.petstore}store/order/${params}`, { method: 'DELETE', headers: Header});
    return r;
  },
  getStore2: async () => {
    const r = await fetch(`${urls.petstore}store/inventory`, { method: 'GET', headers: Header});
    return r;
  },
};

export default store;
