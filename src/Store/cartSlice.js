import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    products: []
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const { productDetails, discount, category } = action.payload;
            const newProduct = {
                id: nanoid(),
                productDetails,
                discount,
                category
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
