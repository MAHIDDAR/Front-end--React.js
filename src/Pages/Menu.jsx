// src/Pages/Menu.jsx

import { foodItems } from "../data/foodData";
import FoodCard from "../components/FoodCard";
import "./Menu.css";

function Menu() {
  return (
    <div className="menu-container">
      <h2 className="menu-title">Our Menu 🍔</h2>

      <div className="grid">
        {foodItems.map((item) => (
          <FoodCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Menu;