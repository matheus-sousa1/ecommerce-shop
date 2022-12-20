import "./footer.css";
import myImg from "../../src/pages/shop/logoShop.png";

export const Footer = () => {
  return (
    <div className="footer">
      <h4>
        &copy; 2022 <img src={myImg} />
      </h4>
    </div>
  );
};
