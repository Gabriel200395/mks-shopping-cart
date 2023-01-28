import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type PropertesProducts = {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: number;
  theAmount: number;
  total: number;
};

type IntancesCartProducts = {
  shoopingCart: PropertesProducts[];
  seeProducts: boolean;
};

const initialState: IntancesCartProducts = {
  shoopingCart: [],
  seeProducts: false, 
};

const pruductsCart = createSlice({
  name: "CART_PRODUCTS",
  initialState,
  reducers: {
    AddShoppingCart(state, action: PayloadAction<PropertesProducts[]>) { 
      return {
        shoopingCart: action.payload,
        seeProducts: state.seeProducts,
      };
    },

    SeeProductsCart(state, action: PayloadAction<boolean>) {
      return {
        shoopingCart: state.shoopingCart,
        seeProducts: action.payload, 
      };
    },
    IncrementProductCart(state, action: PayloadAction<PropertesProducts[]>) {
      return {
        shoopingCart: action.payload,
        seeProducts: state.seeProducts, 
      };
    },

    DecrementProductCart(state, action: PayloadAction<PropertesProducts[]>) {
      return {
        shoopingCart: action.payload,
        seeProducts: state.seeProducts, 
      };
    },

    RemoveProductCart(state, action: PayloadAction<PropertesProducts[]>) {
      return {
        shoopingCart: action.payload,
        seeProducts: state.seeProducts, 
      };
    },
  },
});

export const {
  AddShoppingCart,
  SeeProductsCart,
  IncrementProductCart,
  DecrementProductCart,
  RemoveProductCart,
} = pruductsCart.actions;
export default pruductsCart.reducer;
