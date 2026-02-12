import { useState } from "react";
import API from "../api/axios";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await API.post("/register", form);
      localStorage.setItem("userInfo", JSON.stringify(data));
      alert("Registered Successfully");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="flex justify-center mt-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg p-6 w-96 rounded"
      >
        <h2 className="text-2xl mb-4 font-bold text-center">Register</h2>

        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full border p-2 mb-3"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full border p-2 mb-3"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full border p-2 mb-3"
          onChange={handleChange}
        />

        <button className="bg-black text-white w-full p-2">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
