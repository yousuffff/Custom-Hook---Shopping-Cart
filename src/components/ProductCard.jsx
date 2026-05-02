import { FaShoppingCart } from "react-icons/fa";
const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product">
      <h2>{product.name}</h2>
      <h3>{product.price}</h3>
      <button onClick={onAddToCart}>
        <FaShoppingCart />
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
