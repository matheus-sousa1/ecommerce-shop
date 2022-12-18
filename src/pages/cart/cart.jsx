import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop_context";
import { useContext } from "react";
import { CartItem } from "./cart-item";
import styles from "./cart.css";
import { useNavigate } from "react-router-dom";
import { ShoppingCartSimple } from "phosphor-react";

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Seu carrinho de itens</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p>Subtotal: R${totalAmount}</p>
          <button onClick={() => navigate("/")}>Continuar comprando</button>
          <button onClick={() => navigate("/request")}>Fechar pedido</button>
        </div>
      ) : (
        <div className="cartEmpty">
          <h1>
            Seu carrinho está vázio <ShoppingCartSimple />
          </h1>
        </div>
      )}
    </div>
  );
};
