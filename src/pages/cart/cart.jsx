import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop_context";
import { useContext } from "react";
import { CartItem } from "./cart-item";
import styles from "./cart.css";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Seu carrinho de Itens</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
      <div className="checkout">
        <p>Subtotal: R${totalAmount}</p>
        <button onClick={() => navigate("/")}>Continuar comprando</button>
        <button>Conferir</button>
      </div>
    </div>
  );
};
