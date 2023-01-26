import { Nav, Logo, H3, H4, Button, Span, Img } from "./styles";
import cart from "../../assets/icons/cart.png";
import { useSelector } from "react-redux";

export default function Navbar() {
  type DataState = {
    stateShoopingCart: {
      shoopingCart: [];
    };
  };

  const { shoopingCart } = useSelector(
    (state: DataState) => state.stateShoopingCart
  );

  return (
    <Nav>
      <Logo>
        <H3>MKS</H3>
        <H4>Sistemas</H4>
      </Logo>

      <Button>
        <Img src={cart} alt={cart} />
        <Span>{shoopingCart.length}</Span>
      </Button>
    </Nav>
  );
}
