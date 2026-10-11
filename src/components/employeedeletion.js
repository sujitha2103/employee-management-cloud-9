import { useState } from "react";
export default function EmployeeDeletion() {

  const [id, setId] = useState("");

  const handleDelete = () => {
    const list = JSON.parse(localStorage.getItem("employees") || "[]");
    if (!list.some((e) => e.id === id)) {
      alert("Employee kidaikala!");
      return;
    }
    if (window.confirm("Sure ah delete pannanuma?")) {
      localStorage.setItem("employees", JSON.stringify(list.filter((e) => e.id !== id)));
      alert("Employee deleted!");
      setId("");
    }
  };

  return (
    <div>
      <h2>Delete Employee</h2>
      <input placeholder="Employee ID" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}