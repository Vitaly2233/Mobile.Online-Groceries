import AsyncStorage from '@react-native-async-storage/async-storage';
import {api} from '../config';
import store, {useStore} from '../store';

const UserStore = store.userStore;

export const login = async (email: string, password: string) => {
  try {
    const body = {
      email,
      password,
    };
    const res = await api.post('auth/login', {...body});
    console.log(res.data);

    if (res && res.status === 201) {
      const token = res.data.access_token;

      UserStore.setToken(token);
      api.defaults.headers.common = {Authorization: `Bearer ${token}`};
      await AsyncStorage.setItem('token', token);
    }
  } catch (e) {
    console.log(e);
  }
};
