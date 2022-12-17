import { useContext } from "react";
import { ShopContext } from "../../context/shop_context";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="product">
      <img src={productImage} alt="image-product" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>R$ {price}</p>

        <button className="addToCartBttn" onClick={() => addToCart(id)}>
          Adicionar No Carrinho
        </button>
      </div>
    </div>
  );
};
