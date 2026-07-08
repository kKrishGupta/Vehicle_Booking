import React,{useState,useContext} from "react";
import { Link,useNavigate } from "react-router-dom";
import logo from "../assets/uber-logo.png"; // Replace with your logo path
import { UserDataContext } from "../context/UserContext";
import axios from "axios";
const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});
  const { user, setUser } = React.useContext(UserDataContext);
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    const newUser = {
      email: email,
      password: password,
    };
    
    const response =await axios.post(`${import.meta.env.VITE_API_BASE_URL}/users/login`, newUser);
    if (response.status === 200){
      const data = response.data;
      localStorage.setItem("token", data.token);
      setUser(data.user);
      navigate("/user-home");
    } else {
      alert("Login failed. Please try again.");
    }
  }
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white p-7">

      {/* Logo */}
      <div>
        <img
          src={logo}
          alt="Uber"
          className="w-20 mb-10"
        />

        {/* Login Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>

          <div>
            <h3 className="text-lg font-semibold mb-2">
              What's your email?
            </h3>

            <input
              type="email"
              required
              placeholder="email@example.com"
              className="w-full bg-[#eeeeee] rounded-lg px-4 py-3 text-lg outline-none border focus:border-black transition"
              value={email}
              onChange={(e) => (setEmail(e.target.value))}
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">
              Enter your password
            </h3>

            <input
              type="password"
              required
              placeholder="••••••••"
              className="w-full bg-[#eeeeee] rounded-lg px-4 py-3 text-lg outline-none border focus:border-black transition"
              value={password}
              onChange={(e) => (setPassword(e.target.value))}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg text-lg font-semibold hover:bg-neutral-900 transition"
          >
            Login
          </button>

        </form>

        <p className="text-center mt-6 text-gray-600">
          New here?{" "}
          <Link
            to="/user-signup"
            className="text-blue-600 font-semibold hover:underline"
          >
            Create new account
          </Link>
        </p>
      </div>

      {/* Bottom Button */}
      <div className="mb-5">
        <Link
          to="/captain-login"
          className="block w-full text-center bg-[#10B461] text-white py-3 rounded-lg text-lg font-semibold hover:bg-[#0f9c55] transition"
        >
          Sign in as Captain
        </Link>
      </div>
      

    </div>
  );
};

export default UserLogin;