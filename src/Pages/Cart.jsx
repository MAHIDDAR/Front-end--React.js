import { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

function Cart() {
  const { state, dispatch } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (!user) {
      alert("🔐 Please login to view cart!");
      navigate("/login");
    }
  }, []);

  if (state.cart.length === 0) {
    return <h2 className="empty">Cart is empty 🛒</h2>;
  }

  return (
    <div className="cart">
      {state.cart.map((item, i) => (
        <div key={i} className="cart-item">
          <img src={item.img} alt={item.name} />

          <div>
            <h4>{item.name}</h4>
            <p>₹{item.price}</p>
          </div>

          <button
  onClick={() => {
    alert("Order Placed Successfully ✅");

  
    dispatch({ type: "REMOVE", index: i });
  }}
>
  Order
</button>

          <button
            onClick={() => {
              dispatch({ type: "REMOVE", index: i });
              alert("Removed ❌");
            }}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default Cart;