import "./App.css";
import { useCart } from "./hooks/useCart";
import { products } from "./Data/products";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
function App() {
  const { cart, total, addToCart, updateQuantity, removeFromCart } = useCart();

  return (
    <div className="app">
      <header>
        <h2>Shopping Cart</h2>
      </header>

      {/* FIXED */}
      <main>
        {/* products section */}
        <section className="products">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          ))}
        </section>
        <div className="cart-wrapper">
          {/* cart sidebar */}
          <Cart
            cart={cart}
            onRemove={removeFromCart}
            total={total}
            onUpdateQuantity={updateQuantity}
          />
        </div>
      </main>
    </div>
  );
}
export default App;
