import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(form);
    navigate("/dashboard");
  };

  return (
    <div className="flex justify-center py-20">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-8 rounded-xl w-full max-w-md animate-fade-in"
      >
        <h2 className="text-2xl font-bold mb-6 text-white">Register</h2>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full mb-4 p-3 rounded bg-gray-800 text-white"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-3 rounded bg-gray-800 text-white"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 p-3 rounded bg-gray-800 text-white"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button className="w-full bg-green-600 p-3 rounded hover:bg-green-500 transition">
          Create Account
        </button>
      </form>
    </div>
  );
}
