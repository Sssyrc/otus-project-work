import fetch from 'node-fetch';
import urls from '../config/urls';
import headers from '../helpers/headers';

const pets = {
  get1: async (params) => {
    const r = await fetch(`${urls.petstore}pet/findByStatus/?${params}`, { method: 'GET', headers: headers()});
    return r;
  },
  get2: async (petId) => {
    const r = await fetch(`${urls.petstore}pet/${petId}`, { method: 'GET', headers: headers()});
    return r;
  },
  post1: async (params) => {
    const r = await fetch(`${urls.petstore}store/order/?${params}`, { method: 'POST', headers: headers()});
    return r;
  },
};

export default pets;
