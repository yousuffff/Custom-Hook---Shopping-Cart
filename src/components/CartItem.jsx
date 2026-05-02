import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <div className="cart-items">
      <div className="">
        <h2>{item.name}</h2>
        <h2>{item.price}</h2>
        <div className="quantity-controls">
          <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>
            <FaMinus />
          </button>
          <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>
            <FaPlus />
          </button>
        </div>
        <button className="remove-btn" onClick={() => onRemove(item.id)}>
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
