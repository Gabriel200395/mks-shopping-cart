import cart from "../../assets/icons/cart.png";

export default function Navbar() {
  return (
    <nav>
      <div>
        <h3>MKS</h3>
        <h4>Sistemas</h4>
      </div>

      <button>
        <img src={cart} alt={cart} />
      </button>
    </nav>
  );
}
