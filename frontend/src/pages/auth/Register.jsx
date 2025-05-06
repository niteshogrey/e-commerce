import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerApi } from "../../redux/api/authApi";

const Register = () => {
    const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(registerApi(formData))
  };
  return (
    <div className="flex flex-col md:flex-row items-center justify-evenly border p-8 h-screen bg-gradient-to-tr from-purple-100 to-blue-300/75">
      {/* Side image */}
      <div className="hidden md:flex justify-center items-center w-1/2">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
          className="max-w-full h-auto opacity-80 rounded-3xl"
          alt="Login Visual"
        />
      </div>

      {/* Login Form */}
      <div className="flex flex-col justify-center items-start md:items-center w-full md:w-1/2 px-4 ">
        <h2 className="text-5xl font-semibold poppins-semibold">Register</h2>
        <form className="flex flex-col gap-4 pt-10 w-full max-w-md">
          <div className="flex flex-col gap-2 font-semibold">
            <label className="text-lg">Enter First name</label>
            <input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              className="border h-10 w-full rounded bg-gray-100 px-3"
              placeholder="First name"
            />
          </div>
          <div className="flex flex-col gap-2 font-semibold">
            <label className="text-lg">Enter Last Name</label>
            <input
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              className="border h-10 w-full rounded bg-gray-100 px-3"
              placeholder="Last Name"
            />
          </div>

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
            <label className="text-lg">Enter Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border h-10 w-full rounded bg-gray-100 px-3"
              placeholder="Email Address"
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
            I have an account.{" "}
            <a href="/login" className="text-blue-500 underline">
              Login
            </a>
          </p>
          <button
            type="button"
            onClick={handleSubmit}
            className="bg-blue-600 text-xl font-semibold text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
