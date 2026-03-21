import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="hero">
      <h1>Order Food in Seconds 🍔</h1>
      <p>Fresh, Fast & Delicious</p>

      <button onClick={() => navigate("/menu")}>
        Explore Menu
      </button>
    </div>
  );
}

export default Home;