import { useState } from "react";
import "./Auth.css";

function Login() {
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!user.email || !user.password) {
      setError("All fields are required ❌");
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
    localStorage.setItem("user", user.email);

    alert("Login Successful ✅");


    window.location.href = "/home";
  };

  return (
    <div className="auth login-bg">
      <div className="auth-box">
        <h2>Login</h2>

        {error && <p className="error">{error}</p>}

        <input
          type="email"
          placeholder="Enter Email"
          value={user.email}
          onChange={(e) =>
            setUser({ ...user, email: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={user.password}
          onChange={(e) =>
            setUser({ ...user, password: e.target.value })
          }
        />

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;