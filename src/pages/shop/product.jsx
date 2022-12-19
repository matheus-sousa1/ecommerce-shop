import { useContext } from "react";
import { ShopContext } from "../../context/shop_context";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];
  return (
    <div className="product">
      <div className="imgProduct">
        <img src={productImage} alt="photoProduct" />
      </div>

      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>R$ {price}</p>

        <button className="addToCartBttn" onClick={() => addToCart(id)}>
          Adicionar No Carrinho
          {cartItemAmount > 0 && <> ({cartItemAmount}) </>}
        </button>
      </div>
    </div>
  );
};
