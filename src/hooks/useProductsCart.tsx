import { useEffect, useState } from "react";
import { SeeProductsCart } from "../context/reducers/reducer.Cart";
import { useGlobalState } from "../hooks";
import { DataProducts } from "../interfaces";

export default function useProductsCart() {
  const { state, dispatch } = useGlobalState();
  const { shoopingCart } = state.stateShoopingCart;
  
  const [productsCart, setProductsCart] = useState<DataProducts[]>([]);

  function CalculateTheMountProduct(
    id: number,
    theAmount: number,
    total: number
  ) {
    return productsCart.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          theAmount: theAmount,
          total: total,
        };
      }

      return product;
    });
  }

  function HandleClickIncrementProduct(product: DataProducts) {
    let productIdIncrement = CalculateTheMountProduct(
      product.id,
      product.theAmount + 1,
      Number(product.price) * (product.theAmount + 1)
    );

    setProductsCart(productIdIncrement);

    return productIdIncrement;
  }

  function HandleClickDecrementProduct(product: DataProducts) {
    let productIdDecrement = CalculateTheMountProduct(
      product.id,
      product.theAmount - 1,
      Number(product.price) * (product.theAmount - 1)
    );

    setProductsCart(productIdDecrement);

    return productIdDecrement;
  }

  function RemoveProductItem(id: number) {
    let IdProductItem = productsCart.filter((product) => product.id !== id);


    setProductsCart(IdProductItem);
    return IdProductItem;
  }

  useEffect(() => {
    setProductsCart(shoopingCart);
  }, [shoopingCart]);

  useEffect(() => {
    if (shoopingCart.length < 1) {
      dispatch(SeeProductsCart(false));
    }
  }, [shoopingCart]); 


  const finalAmountPayable = productsCart
    .reduce((total, state) => {
      return state.total + total;
    }, 0)
    .toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  return {
    HandleClickDecrementProduct, 
    HandleClickIncrementProduct, 
    RemoveProductItem,
    productsCart, 
    finalAmountPayable,
  };
}
