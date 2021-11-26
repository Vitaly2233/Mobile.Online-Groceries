import AsyncStorage from '@react-native-async-storage/async-storage';
import {action, computed, makeAutoObservable, observable} from 'mobx';

class OfferStore {
  @observable offered: {productName: string; count: number}[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  @action getCount = (productName: string) => {
    const count = this.offered.find(
      product => product.productName === productName,
    )?.count;
    return count ? count : 1;
  };

  @action addChoosenProduct = async (name: string, count: number) => {
    const index = this.offered.findIndex(
      product => product.productName === name,
    );
    if (index === -1) {
      this.offered.push({count: count, productName: name});
    } else {
      this.offered[index] = {productName: name, count};
    }
    await AsyncStorage.setItem('offered', JSON.stringify(this.offered));
  };

  @action setOffered = async choosenProduct => {
    this.offered = choosenProduct;
    await AsyncStorage.setItem('offered', JSON.stringify(this.offered))
  };

  @action incrementProductCount = async (productName: string) => {
    const index = this.offered.findIndex(
      offer => offer.productName === productName,
    );
    this.offered[index].count++;
    await AsyncStorage.setItem('offered', JSON.stringify(this.offered))
  };

  @action decrementProductCount = async (productName: string) => {
    const index = this.offered.findIndex(
      offer => offer.productName === productName,
    );
    this.offered[index].count--;
    await AsyncStorage.setItem('offered', JSON.stringify(this.offered))
  };

  @action delteOffer = async  productName => {
    const index = this.offered.findIndex(
      offer => offer.productName === productName,
    );
    this.offered.splice(index, 1);
    await AsyncStorage.setItem('offered', JSON.stringify(this.offered))
  };
}

export default new OfferStore();
