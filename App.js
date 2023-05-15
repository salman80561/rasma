import React, { useState } from "react";
import WelcomePage from "./WelcomePage";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (email === "" || password === "" || confirmPassword === "") {
      setError("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const apiKey = "<AIzaSyB26Esbr2mamAS_uIh7q29xDNHd_W9kOqs>";
    const registrationEndpoint = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB26Esbr2mamAS_uIh7q29xDNHd_W9kOqs`;

    try {
      const response = await fetch(registrationEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
      });

      if (response.ok) {
        setLoggedIn(true);
        console.log("User has successfully signed up.");
      } else {
        const data = await response.json();
        setError(data.error.message);
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div>
      {loggedIn ? (
        <WelcomePage />
      ) : (
        <div>
          <h2>Registration</h2>
          <form onSubmit={handleLogin}>
            {error && <div>{error}</div>}
            <div>
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <label>Confirm Password:</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <button type="submit">Register</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
