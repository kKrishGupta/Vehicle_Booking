import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserLogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          navigate("/user-login");
          return;
        }

        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/users/logout`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
          }
        );

        if (response.status === 200) {
          console.log("Logout successful");

          localStorage.removeItem("token");

          navigate("/user-login");
        }
      } catch (error) {
        console.error("Logout Error:", error);

        // Even if the backend fails, clear the local token
        localStorage.removeItem("token");
        navigate("/user-login");
      }
    };

    logout();
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen">
      <h2 className="text-xl font-semibold">Logging out...</h2>
    </div>
  );
};

export default UserLogout;