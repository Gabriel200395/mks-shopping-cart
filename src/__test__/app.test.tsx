import axios from "axios";
import {
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../context/store/store";
import { DataProducts } from "../interfaces";
import App from "../page/App";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

type RespondeData = {
  products: DataProducts[];
  count: number;
};

const productsData: RespondeData = {
  products: [
    {
      id: 1,
      name: "Iphone 11 128 GB",
      brand: "Apple",
      description:
        "Grave vídeos 4K, faça belos retratos e capture paisagens inteiras com o novo sistema de câmera dupla.",
      photo:
        "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone11x128.webp",
      price: "5000.00",
      theAmount: 1,
      total: 1,
    },
  ],

  count: 8,
};

describe("Testting Application", () => {
  test("Testing Product requests", async () => {
    mockedAxios.get.mockImplementation(() =>
      Promise.resolve({ data: productsData })
    );
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    await waitFor(() =>
      expect(
        screen.getByRole("heading", { name: "Iphone 11 128 GB" })
      ).toBeInTheDocument()
    );
  });

  test("testing cart without products", async () => {
    mockedAxios.get.mockImplementation(() =>
      Promise.resolve({ data: productsData })
    );
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    await waitFor(() =>
      expect(
        screen.getByRole("heading", { name: "Iphone 11 128 GB" })
      ).toBeInTheDocument()
    );

    const buttonCart = screen.getByRole("button", { name: /cart\.png 0/i });
    expect(buttonCart.textContent).toBe("0");

    fireEvent.click(buttonCart);

    expect(
      screen.queryByRole("heading", { name: "Carrinho de compras" })
    ).not.toBeInTheDocument();
  });
  test("testing product adding to cart", async () => {
    mockedAxios.get.mockImplementation(() =>
      Promise.resolve({ data: productsData })
    );
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    await waitFor(() =>
      expect(
        screen.getByRole("heading", { name: "Iphone 11 128 GB" })
      ).toBeInTheDocument()
    );

    const buttonCart = screen.getByRole("button", { name: /cart\.png 0/i });
    const addProductCart = screen.getByRole("button", {
      name: /shopping\_bag\.png comprar/i,
    });
    expect(buttonCart.textContent).toBe("0");

    fireEvent.click(addProductCart);
    expect(buttonCart.textContent).toBe("1");

    fireEvent.click(buttonCart);

    const headerCart = screen.queryByRole("heading", {
      name: "Carrinho de compras",
    });

    expect(headerCart).toBeInTheDocument();

    const headerProductCartItem = screen.queryByTestId("name-product");
    expect(headerProductCartItem).toHaveTextContent(/Iphone 11 128 GB/i);

    const countProductItem = screen.queryByTestId("count-product");
    expect(countProductItem).toHaveTextContent("1");

    const priceProductItem = screen.queryByTestId("price-product");
    expect(priceProductItem).toHaveTextContent("R$ 5.000,00");

    const buttonProductItemIncrement = screen.queryByRole("button", {
      name: /\+/i,
    }) as HTMLButtonElement;
    const buttonProductItemDecrement = screen.queryByRole("button", {
      name: /\-/i,
    }) as HTMLButtonElement;

    expect(buttonProductItemIncrement).toBeInTheDocument();
    expect(buttonProductItemDecrement).toBeInTheDocument();

    fireEvent.click(buttonProductItemIncrement);
    expect(countProductItem).toHaveTextContent("2");
    expect(priceProductItem).toHaveTextContent("R$ 10.000,00");

    fireEvent.click(buttonProductItemDecrement);
    expect(countProductItem).toHaveTextContent("1");
    expect(priceProductItem).toHaveTextContent("R$ 5.000,00");

    fireEvent.click(addProductCart);
    expect(countProductItem).toHaveTextContent("2");
    expect(priceProductItem).toHaveTextContent("R$ 10.000,00");

    const totalPayableProductCart = screen.queryByTestId("total-payable");
    expect(totalPayableProductCart).toHaveTextContent("R$ 10.000,00");

    const deleProductItem = screen.queryByTestId(
      "delete-product"
    ) as HTMLButtonElement;
    fireEvent.click(deleProductItem);

    expect(headerProductCartItem).not.toBeInTheDocument();
    
  });
});
