import CartItem from "./CartItem";

const Cart = ({ cart, onUpdateQuantity, onRemove, total }) => {
  if (cart.length === 0) {
    return (
      <div className="cart empty">
        <h2>Cart is Empty!! Add some products</h2>
      </div>
    );
  }
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onUpdateQuantity={onUpdateQuantity}
          onRemove={onRemove}
        />
      ))}
      <div>
        <h2>Total :</h2>
      </div>
    </div>
  );
};

export default Cart;
