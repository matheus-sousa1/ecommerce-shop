import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";
import myImg from "../../../public/myfavicon.icon";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>
          Matheus Shop <img src={myImg} />
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
