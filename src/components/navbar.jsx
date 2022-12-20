import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";
import myImg from "../../src/pages/shop/logoShop.png";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={myImg} />
      </div>
      <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/cart">
          <ShoppingCart size={32} className="icon-cart" />
        </Link>
      </div>
    </div>
  );
};
