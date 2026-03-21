import { Link } from "react-router-dom";
import "./NaV.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function NaV() {
  const { state } = useContext(CartContext);

  const isLoggedIn = localStorage.getItem("user");

  return (
    <nav className="nav">
      <h2>CraveCorner 🍔</h2>

      <div className="links">
        <Link to="/home">Home</Link>
        <Link to="/menu">Menu</Link>

        <Link to="/cart" className="cart-link">
          Cart 🛒
          <span className="badge">{state.cart.length}</span>
        </Link>

        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>

        
        {isLoggedIn ? (
          <button
  className="auth-btn"
  onClick={() => {
    localStorage.removeItem("user");

  
    window.location.href = "/login";
  }}
>
  Logout
</button>
        ) : (
          <>
            <Link to="/login" className="auth-btn">Login</Link>
            <Link to="/register" className="auth-btn">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default NaV;   