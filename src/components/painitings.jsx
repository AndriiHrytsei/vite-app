/* eslint-disable react/prop-types */
const Product = ({ imgSrc, imgAlt, imgWidth = "150" }) => (
    <div>
      <img
        src={imgSrc}
        alt={imgAlt}
        width={imgWidth}
      />
      <h2>Tacos With Lime</h2>
      <p>Price: 10.99$</p>
      <button type="button">Add to cart</button>
    </div>
);

export default Product