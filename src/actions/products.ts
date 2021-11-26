import {api} from '../config';
import store from '../store';

const ProductsStore = store.productStore;
const OfferStore = store.offerStore;

export const getBase64Icon = async (id: string) => {
  try {
    const res = await api.get(`picture/${id}`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const getAllCategories = async () => {
  try {
    const res = await api.get(`category`);
    ProductsStore.setCategories(res.data);
  } catch (e) {
    console.log(e);
  }
};

export const getAllProducts = async () => {
  try {
    const res = await api.get('products');
    if ((res && res.status === 201) || res.status === 200) {
      const products = res.data;

      if (!products) return;
      ProductsStore.setProducts(products);
      for (const product of products) {
        const icon = await getBase64Icon(product._id);
        if (!icon) return;
        ProductsStore.setPictures(product._id, icon);
      }
    }
  } catch (e) {
    console.log(e);
  }
};

export const computeProducts = () => {
  let res = {products: [], generalPrice: 0};
  OfferStore.offered.forEach(offer => {
    const offeredProduct = ProductsStore.products.find(
      product => product.name === offer.productName,
    );

    if (!offeredProduct) return res;
    res.generalPrice += parseFloat(offeredProduct.price) * offer.count;
    res.products.push({...offeredProduct, count: offer.count});
    return res;
  });
  return res;
};
