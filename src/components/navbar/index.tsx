import { Nav, Logo, H3, H4, Button, Span, Img } from "./styles";
import cart from "../../assets/icons/cart.png";

export default function Navbar() {
  return (
    <Nav>
      <Logo>
        <H3>MKS</H3>
        <H4>Sistemas</H4>
      </Logo>

      <Button>
        <Img src={cart} alt={cart} />
        <Span>0</Span>
      </Button>
    </Nav>
  );
}
