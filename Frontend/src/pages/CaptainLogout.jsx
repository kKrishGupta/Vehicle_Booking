import React, { useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";

const CaptainLogout = () => {
  const navigate = useNavigate();
  const { setCaptain } = useContext(CaptainDataContext);

  useEffect(() => {
    const logout = async () => {
      try {
        const token = localStorage.getItem("token");

        if (token) {
          await axios.get(
            `${import.meta.env.VITE_API_BASE_URL}/captains/logout`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
              withCredentials: true,
            }
          );
        }
      } catch (err) {
        console.log(err);
      } finally {
        localStorage.removeItem("token");
        setCaptain(null);
        navigate("/captain-login", { replace: true });
      }
    };

    logout();
  }, [navigate, setCaptain]);

  return (
    <div className="flex items-center justify-center h-screen">
      Logging out...
    </div>
  );
};

export default CaptainLogout;