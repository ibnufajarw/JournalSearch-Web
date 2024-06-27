import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const Login = () => {
  const [avatarUrl, setAvatarUrl] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    fetchAvatar();
  }, []);

  const fetchAvatar = async () => {
    try {
      const response = await axios.get("https://api.example.com/random-avatar");
      if (response.data && response.data.avatarUrl) {
        setAvatarUrl(response.data.avatarUrl);
      } else {
        console.error("Invalid avatar data:", response.data);
      }
    } catch (error) {
      console.error("Error fetching avatar:", error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log("Username:", username);
      console.log("Password:", password);

      const loginResponse = await axios.post("https://api.example.com/login", {
        username,
        password,
      });

      Swal.fire({
        icon: "success",
        title: "Login Success!",
        text: "You have successfully logged in.",
      });

      console.log("Login response:", loginResponse.data);
    } catch (error) {
      console.error("Error during login:", error);

      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Please check your username and password.",
      });
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <img src={avatarUrl} alt="Avatar" />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
