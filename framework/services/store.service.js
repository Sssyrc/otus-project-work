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
  postUser1: async (params) => {
    const r = await fetch(`${urls.petstore}user`,{ method: 'POST', headers: Header, body: JSON.stringify(params)});
    return r;
  },
  getUserlogin: async (params) => {
    const r = await fetch(`${urls.petstore}user/login/?${params}`, { method: 'GET', headers: Header});
    return r;
  },
  getUserLogout: async () => {
    const r = await fetch(`${urls.petstore}user/logout`, { method: 'GET', headers: Header});
    return r;
  },
  putUser: async (params, username) => {
    const r = await fetch(`${urls.petstore}user/${username}`, { method: 'PUT', headers: Header, body: JSON.stringify(params)});
    return r;
  },
  deleteUser: async (params) => {
    const r = await fetch(`${urls.petstore}user/${params}`, { method: 'DELETE', headers: Header});
    return r;
  },
};

export default pets;
