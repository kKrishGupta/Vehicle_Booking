import React,{useState} from "react";
import { Link } from "react-router-dom";
import logo from "../assets/uber-driver.png"; // Replace with your logo path

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setCaptainData] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    setCaptainData({ email:email,password: password });
    console.log(captainData);
    setEmail("");
    setPassword("");
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
          Join a fleet with us?{" "}
          <Link
            to="/captain-signup"
            className="text-blue-600 font-semibold hover:underline"
          >
            Register as a Captain
          </Link>
        </p>
      </div>

      {/* Bottom Button */}
      <div className="mb-5">
        <Link
          to="/user-login"
          className="block w-full text-center bg-orange-900 hover:bg-orange-800 text-white py-3 rounded-xl text-lg font-semibold shadow-lg transition-all duration-300"
        >
          Sign in as User
        </Link>
      </div>
            

    </div>
  );
};

export default CaptainLogin;