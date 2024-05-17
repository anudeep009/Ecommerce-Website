import { createSlice } from "@reduxjs/toolkit";

const persistedProducts = JSON.parse(localStorage.getItem("products")) || [];

const initialState = {
  products: persistedProducts
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const { id, title, description, price, discountPercentage, thumbnail } = action.payload;
      const existingProduct = state.products.find(product => product.id === id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        const newProduct = {
          id,
          title,
          description,
          price,
          discountPercentage,
          thumbnail,
          quantity: 1
        };
        state.products.push(newProduct);
      }
      localStorage.setItem("products", JSON.stringify(state.products));
    },
    removeProduct: (state, action) => {
      const productIdToRemove = action.payload;
      state.products = state.products.filter(product => product.id !== productIdToRemove);
      localStorage.setItem("products", JSON.stringify(state.products));
    },
    decreaseQuantity: (state, action) => {
      const productIdToDecrease = action.payload;
      const productToDecrease = state.products.find(product => product.id === productIdToDecrease);
      if (productToDecrease && productToDecrease.quantity > 1) {
        productToDecrease.quantity--;
      }
      localStorage.setItem("products", JSON.stringify(state.products));
    },
    increaseQuantity: (state, action) => {
      const productIdToIncrease = action.payload;
      const productToIncrease = state.products.find(product => product.id === productIdToIncrease);
      if (productToIncrease) {
        productToIncrease.quantity++;
      }
      localStorage.setItem("products", JSON.stringify(state.products));
    }
  }
});

export const { addProduct, removeProduct, decreaseQuantity, increaseQuantity } = cartSlice.actions;

export default cartSlice.reducer;
