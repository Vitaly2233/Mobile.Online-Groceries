import AsyncStorage from '@react-native-async-storage/async-storage';
import {action, computed, makeAutoObservable, observable} from 'mobx';
import {Pictures} from '../models/Pictures';
import {Product} from '../models/Product';

class ProductStore {
  @observable products: Product[] = [];
  @observable pictures: Pictures = {};
  @observable favorite: any[] = [];
  @observable categories: {name: string; _id: string}[] = [];
  @observable filters: {searchInput: string; categories: string[]} = {
    searchInput: '',
    categories: [],
  };

  constructor() {
    makeAutoObservable(this);
  }

  @action setProducts = (products: Product[]) => {
    this.products = products;
  };

  @action setPictures = (productId: string, base64Image: string) => {
    this.pictures = {...this.pictures, [productId]: base64Image};
  };

  @action setFavorite = (favorite: any[]) => {
    this.favorite = favorite;
  };

  @action deleteFavorite = async (productId: string) => {
    const index = this.favorite.findIndex(favorite => favorite === productId);
    this.favorite.splice(index, 1);
    await AsyncStorage.setItem('favorite', JSON.stringify([this.favorite]));
  };

  @action addFavorite = async (productId: string) => {
    this.favorite.push(productId);
    await AsyncStorage.setItem(
      'favorite',
      JSON.stringify([this.favorite, productId]),
    );
  };

  @action setCategories = (categories: {name: string; _id: string}[]) => {
    this.categories = categories;
  };

  @action setSearchInput = text => {
    this.filters.searchInput = text;
  };

  @action setCategoryFilter = (categoryFilter: string[]) => {
    this.filters.categories = categoryFilter;
  };

  @computed get filterProducts() {
    const filters = this.filters;
    let res = this.products;

    if (filters.searchInput) {
      res = res.filter(product =>
        product.name.toLowerCase().includes(filters.searchInput.toLowerCase()),
      );
    }
    if (filters.categories.length !== 0) {
      res = res.filter(product => {
        return filters.categories.includes(product.category);
      });
    }

    return res;
  }

  @computed get favoriteProducts() {
    return this.products.filter(product => this.favorite.includes(product._id));
  }
}

export default new ProductStore();
