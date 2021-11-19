import {action, makeAutoObservable, observable} from 'mobx';
import {Pictures} from '../models/Pictures';
import {Product} from '../models/Product';

class ProductStore {
  @observable products: Product[] = [];
  @observable pictures: Pictures = {};

  constructor() {
    makeAutoObservable(this);
  }

  @action setProducts = (products: Product[]) => {
    this.products = products;
  };

  @action setPictures = (pictures: Pictures) => {
    this.pictures = {...this.pictures, ...pictures};
  };
}

export default new ProductStore();
