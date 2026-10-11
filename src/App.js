import { useState } from "react";
import EmployeeRegistration from "./components/employeeregistration";
import EmployeeProfileUpdate from "./components/employeeprofileupdate";
import EmployeeSearch from "./components/employeesearch";
import EmployeeDeletion from "./components/employeedeletion";
import "./App.css";

const tabs = [
  { key: "register", label: "Register" },
  { key: "update", label: "Update" },
  { key: "search", label: "Search" },
  { key: "delete", label: "Delete" },
];

export default function App() {
  const [tab, setTab] = useState("register");

  return (
    <div className="container">
      <div className={tab === "search" ? "page wide-page" : "page"}>
        <div className="tabs">
          {tabs.map((t) => (
            <button
              key={t.key}
              className={tab === t.key ? "tab active" : "tab"}
              onClick={() => setTab(t.key)}
            >
              {t.label}
            </button>
          ))}
        </div>

        {tab === "register" && <EmployeeRegistration />}
        {tab === "update" && <EmployeeProfileUpdate />}
        {tab === "search" && <EmployeeSearch />}
        {tab === "delete" && <EmployeeDeletion />}
      </div>
    </div>
  );
}