import session from './session';

export default {
  login(username, password) {
    return session.post('/auth/login/', { username, password });
  },
};
