import {action, computed, makeAutoObservable, observable} from 'mobx';
import {Pictures} from '../models/Pictures';
import {Product} from '../models/Product';

class ProductStore {
  @observable products: Product[] = [];
  @observable pictures: Pictures = {};
  @observable favorite: any = [];
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

  @action setPictures = (pictures: Pictures) => {
    this.pictures = {...this.pictures, ...pictures};
  };

  @action setFavorite = (favorite: any[]) => {
    this.favorite = favorite;
  };

  @action setCategories = (categories: {name: string; _id: string}[]) => {
    this.categories = categories;
  };

  @action setSearchInput = text => {
    this.filters.searchInput = text;
  };

  @action setCategoryFilter = (categoryName: string) => {
    this.filters.categories.push(categoryName);
  };

  @action deleteCategoryFilter = (categoryId: string) => {
    const index = this.filters.categories.findIndex(
      category => category === categoryId,
    );
    this.filters.categories.splice(index, 1);
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
}

export default new ProductStore();
