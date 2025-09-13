import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./auth.css";

interface User {
  email: string;
  password: string;
  partner1: string;
  partner2: string;
}

const Auth: React.FC = () => {
  const nav = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState<User>({
  email: "",
  password: "",
  partner1: "",
  partner2: ""
  });
  const [error, setError] = useState("");
  const [loggedInUser, setLoggedInUser] = useState<User | null>(null);

  // Check if user is already logged in
  React.useEffect(() => {
    const user = localStorage.getItem("weddingUser");
    if (user) setLoggedInUser(JSON.parse(user));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError("Bitte E-Mail und Passwort angeben.");
      return;
    }
  localStorage.setItem("weddingUser", JSON.stringify(form));
  setLoggedInUser(form);
  setError("");
  nav("/");
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const user = localStorage.getItem("weddingUser");
    if (!user) {
      setError("Kein Account gefunden. Bitte registrieren.");
      return;
    }
    const userObj = JSON.parse(user);
    if (userObj.email === form.email && userObj.password === form.password) {
      setLoggedInUser(userObj);
      setError("");
      nav("/");
    } else {
      setError("Falsche E-Mail oder Passwort.");
    }
  };

  const handleLogout = () => {
    setLoggedInUser(null);
    setForm({ email: "", password: "", partner1: "", partner2: "" });
  };

  if (loggedInUser) {
    return (
      <div className="auth-container">
        <h2>Willkommen, {loggedInUser.partner1} & {loggedInUser.partner2}!</h2>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  return (
    <div className="auth-container">
      <h1>{isLogin ? "Login" : "Registrieren"}</h1>
      <form onSubmit={isLogin ? handleLogin : handleRegister} className="auth-form">
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="E-Mail"
          required
        />
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Passwort"
          required
        />
        {!isLogin && (
          <>
            <input
              type="text"
              name="partner1"
              value={form.partner1}
              onChange={handleChange}
              placeholder="Name Partner 1"
              required
            />
            <input
              type="text"
              name="partner2"
              value={form.partner2}
              onChange={handleChange}
              placeholder="Name Partner 2"
              required
            />
          </>
        )}
        <button type="submit">{isLogin ? "Login" : "Registrieren"}</button>
      </form>
      <button onClick={() => { setIsLogin(!isLogin); setError(""); }} style={{ marginTop: "1rem" }}>
        {isLogin ? "Noch keinen Account? Registrieren" : "Schon registriert? Login"}
      </button>
      {error && <div className="auth-error">{error}</div>}
    </div>
  );
};

export default Auth;
