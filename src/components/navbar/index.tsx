import { Nav, Logo, H3, H4, Button, Span, Img, Cart } from "./styles";
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

    {/*   <Cart>
        <div className="item">1</div>
        <div className="item">2</div>
        <div className="item">3</div>
        <div className="item">4</div>
        <div className="item">5</div>
        <div className="item">6</div>
        <div className="item">7</div>
        <div className="item">8</div>
        <div className="item">9</div>
        <div className="item">10</div>
        <div className="item">11</div>
        <div className="item">12</div>
        <div className="item">13</div>
        <div className="item">14</div>
        <div className="item">15</div>
        <div className="item">16</div>
      </Cart> */}
    </Nav>
  );
}
