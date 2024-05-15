import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: []
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const { id, title, description, price, discountPercentage, thumbnail } = action.payload;
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
    },
    removeProduct: (state, action) => {
      const productIdToRemove = action.payload;
      state.products = state.products.filter(product => product.id !== productIdToRemove);
    },
    decreaseQuantity: (state, action) => {
      const productIdToDecrease = action.payload;
      const productToDecrease = state.products.find(product => product.id === productIdToDecrease);
      if (productToDecrease && productToDecrease.quantity > 1) {
        productToDecrease.quantity--; 
      }
    },
    increaseQuantity: (state, action) => {
      const productIdToIncrease = action.payload;
      const productToIncrease = state.products.find(product => product.id === productIdToIncrease);
      if (productToIncrease) {
        productToIncrease.quantity++;
      }
    }
  }
});

export const { addProduct, removeProduct, decreaseQuantity, increaseQuantity } = cartSlice.actions;

export default cartSlice.reducer;

