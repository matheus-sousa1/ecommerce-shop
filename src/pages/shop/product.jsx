export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  return (
    <div className="product">
      <img src={productImage} alt="image-product" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>R$ {price}</p>
        <p></p>
      </div>
    </div>
  );
};
