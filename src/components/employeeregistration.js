import { useState } from "react";

export default function EmployeeRegistration() {
  const [form, setForm] = useState({ id: "", name: "", email: "", role: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const list = JSON.parse(localStorage.getItem("employees") || "[]");
    if (list.some((emp) => emp.id === form.id)) {
      alert("Indha ID already irukku!");
      return;
    }
    list.push(form);
    localStorage.setItem("employees", JSON.stringify(list));
    alert("Employee registered!");
    setForm({ id: "", name: "", email: "", role: "" });
  };

  return (
    <div>
      <h2>Employee Registration</h2>
      <form onSubmit={handleSubmit}>
        <input name="id" placeholder="Employee ID" value={form.id} onChange={handleChange} required />
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <input name="role" placeholder="Role" value={form.role} onChange={handleChange} required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}