import { useState } from "react";

export default function EmployeeProfileUpdate() {
  const [id, setId] = useState("");
  const [form, setForm] = useState(null);

  const handleFind = () => {
    const list = JSON.parse(localStorage.getItem("employees") || "[]");
    const emp = list.find((e) => e.id === id);
    if (emp) setForm(emp);
    else {
      setForm(null);
      alert("Employee kidaikala!");
    }
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleUpdate = (e) => {
    e.preventDefault();
    const list = JSON.parse(localStorage.getItem("employees") || "[]");
    const updated = list.map((emp) => (emp.id === form.id ? form : emp));
    localStorage.setItem("employees", JSON.stringify(updated));
    alert("Employee updated!");
  };

  return (
    <div>
      <h2>Update Employee</h2>
      <input placeholder="Employee ID" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={handleFind}>Find</button>

      {form && (
        <form onSubmit={handleUpdate}>
          <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
          <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
          <input name="role" placeholder="Role" value={form.role} onChange={handleChange} required />
          <button type="submit">Update</button>
        </form>
      )}
    </div>
  );
}