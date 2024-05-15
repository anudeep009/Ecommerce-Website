import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: []
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const { id, productDetails, discount, category, productImgSource } = action.payload;
            const newProduct = {
                id,
                productDetails,
                discount,
                category,
                productImgSource
            };
            return {
                ...state,
                products: [...state.products, newProduct]
            };
        },
        removeProduct: (state, action) => {
            const productIdToRemove = action.payload;
            return {
                ...state,
                products: state.products.filter(product => product.id !== productIdToRemove)
            };
        }
    }
});

export const { addProduct, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;
