import { useState } from "react";

export default function EmployeeSearch() {
  const [query, setQuery] = useState("");
  const list = JSON.parse(localStorage.getItem("employees") || "[]");

  const results = list.filter(
    (e) =>
      e.id.toLowerCase().includes(query.toLowerCase()) ||
      e.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h2>Search Employee</h2>
      <input placeholder="ID or Name" value={query} onChange={(e) => setQuery(e.target.value)} />

      <table>
        <thead>
          <tr><th>ID</th><th>Name</th><th>Email</th><th>Role</th></tr>
        </thead>
        <tbody>
          {results.length === 0 ? (
            <tr><td colSpan="4">No employees found</td></tr>
          ) : (
            results.map((e) => (
              <tr key={e.id}>
                <td>{e.id}</td><td>{e.name}</td><td>{e.email}</td><td>{e.role}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}