import { Nav, Logo, H3, H4, Button, Span, Img } from "./styles";
import cart from "../../assets/icons/cart.png";
import { useSelector, useDispatch } from "react-redux";
import { SeeProductsCart } from "../../context/reducers/pruductsCart";
export default function Navbar() {
  type DataProducts = {
    id: number;
    name: string;
    brand: string;
    description: string;
    photo: string;
    price: string;
  };

  type DataState = {
    stateShoopingCart: {
      shoopingCart: DataProducts[];
      seeProducts: boolean;
    };
  };

  const dispatch = useDispatch();
  const { shoopingCart } = useSelector(
    (state: DataState) => state.stateShoopingCart
  );

  return (
    <Nav>
      <Logo>
        <H3>MKS</H3>
        <H4>Sistemas</H4>
      </Logo>

      <Button
        disabled={shoopingCart.length > 0 ? false : true}
        onClick={() => dispatch(SeeProductsCart(true))}
      >
        <Img src={cart} alt={cart} />
        <Span>{shoopingCart.length}</Span>
      </Button>
    </Nav>
  );
}
