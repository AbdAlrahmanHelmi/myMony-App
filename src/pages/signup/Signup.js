import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";

import styles from "./Signup.module.css";

import React from "react";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const { error, ispending, signup } = useSignup();
  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, displayName);
  };
  return (
    <form onSubmit={handleSubmit} className={styles["signup-form"]}>
      <h2>Signup</h2>
      <label>
        <span>email</span>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>Pasword</span>
        <input
          type="password"
          onChange={(e) => setPasword(e.target.value)}
          value={password}
        />
      </label>
      <label>
        <span>Display Name</span>
        <input
          type="text"
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
        />
      </label>
      {!ispending && <button className="btn">Signup</button>}
      {ispending && (
        <button className="btn" disabled>
          Loading
        </button>
      )}
      {error && <p>{error}</p>}
    </form>
  );
}
