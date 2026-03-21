import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
  
    if (!user.name || !user.email || !user.password) {
      setError("All fields are required ❌");
      return;
    }

    if (user.name.length < 3) {
      setError("Name must be at least 3 characters ❌");
      return;
    }

    if (!user.email.includes("@")) {
      setError("Enter a valid email ❌");
      return;
    }

    if (user.password.length < 6) {
      setError("Password must be at least 6 characters ❌");
      return;
    }

  
    setError("");
    alert("Registered Successfully 🎉");

    navigate("/login");
  };

  return (
    <div className="auth register-bg">
      <div className="auth-box">
        <h2>Register</h2>

        {error && <p className="error">{error}</p>}

        <input
          placeholder="Enter Name"
          onChange={(e) =>
            setUser({ ...user, name: e.target.value })
          }
        />

        <input
          placeholder="Enter Email"
          onChange={(e) =>
            setUser({ ...user, email: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) =>
            setUser({ ...user, password: e.target.value })
          }
        />

        <button onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
}

export default Register;