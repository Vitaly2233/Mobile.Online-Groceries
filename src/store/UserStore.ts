import {action, makeAutoObservable, observable} from 'mobx';
import {User} from '../models';

class UserStore {
  @observable user?: User;
  @observable isSignedIn: boolean = false;
  @observable token: string | undefined ;

  constructor() {
    makeAutoObservable(this);
  }

  @action setUser = (user: User) => {
    this.user = user;
  };

  @action setToken = async (token: string) => {
    this.token = token;
  };

  @action toggleIsSignedIn() {
    this.isSignedIn = !this.isSignedIn;
  }
}

export default new UserStore();
