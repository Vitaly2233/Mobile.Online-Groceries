import AsyncStorage from '@react-native-async-storage/async-storage';
import {api} from '../config';
import {Product} from '../models/Product';
import store from '../store';

const ProductsStore = store.productStore;

export const ProductsByType = async (
  type: string,
): Promise<Product[] | undefined> => {
  try {
    const res = await api.get<Product[] | null>(`products/${type}`);
    if ((res && res.status === 201) || res.status === 200) {
      const products = res.data;

      if (!products) return;
      for (const product of products) {
        const icon = await getBase64Icon(product._id);
        if (!icon) return;
        ProductsStore.setPictures({[product._id]: icon});
      }
      ProductsStore.setProducts(products);
    }
  } catch (e) {
    console.log(e);
  }
};

export const getBase64Icon = async (id: string) => {
  try {
    const res = await api.get(`picture/${id}`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
