import "./FoodCard.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function FoodCard({ item }) {
  const { state, dispatch } = useContext(CartContext);
  const navigate = useNavigate();

  const count = state.cart.filter((i) => i.id === item.id).length;

  const handleAdd = () => {
    const user = localStorage.getItem("user");

    if (!user) {
      alert("🔐 Please login first!\nNew user? Register now.");
      navigate("/login");
      return;
    }

    dispatch({ type: "ADD", payload: item });
  };

  return (
    <div className="card">
      <img src={item.img} alt={item.name} />

      <h3>{item.name}</h3>
      <p className="price">₹{item.price}</p>

      {count > 0 && <span className="count">Added: {count}</span>}

      <button onClick={handleAdd}>Add to Cart</button>
    </div>
  );
}

export default FoodCard;