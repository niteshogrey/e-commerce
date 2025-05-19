import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginApi } from "../../redux/api/authApi";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    phone_number: "",
    password: "",
  });

  const { user, token } = useSelector((state) => state.auth);
 console.log(user);
 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginApi(formData))
    console.log(formData);
  };

  useEffect(() => {
    if (user && token) {
      if (user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    }
  }, [user, token, navigate]);

  return (
    <div className="flex flex-col md:flex-row items-center justify-evenly border p-8 h-screen bg-gradient-to-tr from-purple-100 to-blue-300/75">
      {/* Login Form */}
      <div className="flex flex-col justify-center items-start md:items-center w-full md:w-1/2 px-4 ">
        <h2 className="text-5xl font-semibold poppins-semibold">Login</h2>
        <form className="flex flex-col gap-6 pt-10 w-full max-w-md">
          <div className="flex flex-col gap-2 font-semibold">
            <label className="text-lg">Enter Phone Number</label>
            <input
              type="number"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              className="border h-10 w-full rounded bg-gray-100 px-3"
              placeholder="Phone number"
            />
          </div>
          <div className="flex flex-col gap-2 font-semibold">
            <label className="text-lg">Enter Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="border h-10 w-full rounded bg-gray-100 px-3"
              placeholder="Password"
            />
          </div>
          <p className="text-lg">
            I haven't an account.{" "}
            <a href="/register" className="text-blue-500 underline">
              Register
            </a>
          </p>
          <button
            type="button"
            onClick={handleSubmit}
            className="bg-blue-600 text-xl font-semibold text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
      </div>

      {/* Side image */}
      <div className="hidden md:flex justify-center items-center w-1/2">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
          className="max-w-full h-auto opacity-80 rounded-3xl"
          alt="Login Visual"
        />
      </div>
    </div>
  );
};

export default Login;
