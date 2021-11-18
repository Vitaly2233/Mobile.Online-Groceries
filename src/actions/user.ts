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
      console.log(res.data);

      UserStore.setToken(res.data.access_token);
      await AsyncStorage.setItem('token', res.data.access_token);
    }
  } catch (e) {
    console.log(e);
  }
};
