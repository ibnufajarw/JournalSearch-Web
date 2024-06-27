import { useState, useEffect } from "react";
import axios from "axios";

const LoginPage = () => {
  const [avatarUrl, setAvatarUrl] = useState("");

  const fetchAvatar = async () => {
    try {
      const response = await axios.get("https://api.example.com/random-avatar");
      setAvatarUrl(response.data.avatarUrl);
    } catch (error) {
      console.error("Error fetching avatar:", error);
    }
  };

  useEffect(() => {
    fetchAvatar();
  }, []);

  return (
    <div>
      <h2>Login</h2>
      <img src={avatarUrl} alt="Avatar" />
      {/* Form login */}
    </div>
  );
};

export default LoginPage;
