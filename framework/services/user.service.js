import fetch from 'node-fetch';
import urls from '../config/urls';
import Header from '../helpers/headers';

const user = {
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

export default user;
