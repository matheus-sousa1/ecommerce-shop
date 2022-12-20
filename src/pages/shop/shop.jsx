import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";
import myImg from "./logoShop.png";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>
          Matheus Shop 
        </h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
