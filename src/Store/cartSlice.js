import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: []
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const { id, title, description, price, discountpercentage, thumbnail } = action.payload;
      const newProduct = {
        id,
        title,
        description,
        price,
        discountpercentage,
        thumbnail
      };
      state.products.push(newProduct);
    },
    removeProduct: (state, action) => {
      const productIdToRemove = action.payload;
      state.products = state.products.filter(product => product.id !== productIdToRemove);
    }
  }
});

export const { addProduct, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;
