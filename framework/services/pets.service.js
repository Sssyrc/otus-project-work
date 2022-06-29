import fetch from 'node-fetch';
import urls from '../config/urls';
import Header from '../helpers/headers';

const pets = {
  getPet1: async (params) => {
    const r = await fetch(`${urls.petstore}pet/findByStatus/?${params}`, { method: 'GET', headers: Header});
    return r;
  },
  getPet2: async (petId) => {
    const r = await fetch(`${urls.petstore}pet/${petId}`, { method: 'GET', headers: Header});
    return r;
  },
  postPet1: async (params) => {
    const r = await fetch(`${urls.petstore}pet`,{ method: 'POST', headers: Header, body: JSON.stringify(params)});
    return r;
  }, 
  putPet: async (params) => {
    const r = await fetch(`${urls.petstore}pet`, { method: 'PUT', headers: Header, body: JSON.stringify(params)});
    return r;
  },
  deletePet: async (petId) => {
    const r = await fetch(`${urls.petstore}pet/${petId}`, { method: 'DELETE', headers: Header});
    return r;
  },
};

export default pets;
