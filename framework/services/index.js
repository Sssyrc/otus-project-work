import pets from './pets.service';
import store from './store.service';
import user from './user.service';

const api = () => ({
  pets: () => ({ ...pets }),
  store: () => ({ ...store }),
  user: () => ({ ...user }),
});

export default api;
