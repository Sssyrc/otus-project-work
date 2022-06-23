import pets from './store.service';

const api = () => ({
  pets: () => ({ ...pets }),
});

export default api;
