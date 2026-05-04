import { FaShoppingCart } from "react-icons/fa";
const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <h2>{product.name}</h2>
      <p className="price">{product.price}</p>
      <button onClick={() => onAddToCart(product)}>
        <FaShoppingCart style={{margin: "2px"}}/>
          Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
