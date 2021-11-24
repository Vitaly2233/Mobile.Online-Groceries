import {action, makeAutoObservable, observable} from 'mobx';

class OfferStore {
  @observable chosenProducts: any = {};

  constructor() {
    makeAutoObservable(this);
  }

  @action setChoosenProducts = (id: string, count: number) => {
    this.chosenProducts[id] = count;
  };
}

export default new OfferStore();
