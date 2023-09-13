import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import User from "./User";
import Admin from "./Admin";
import "./style.css";
const mockEmployees = [
  {
    id: 0,
    name: "mock",
    lastname: "mocklastname",
    position: "Manager",
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer",
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer",
  },
];

const Home = () => {
  const [sector, setSector] = useState("guest");
  const [employees, setEmployees] = useState(mockEmployees);
  //just for auto gen id, start at 3 because last id was '2'
  const [id, setId] = useState(3);
  useEffect(() => {}, [sector, employees]);
  return (
    <div className="contentContainer">
      <h1>
        Generation Thailand
        <br />
        {sector === "admin" ? "Home - Admin Sector" : sector === "user" ? "Home - User Sector" : "React - Assessment"}
      </h1>
      <div className="buttonContainer">
        <button
          onClick={() => {
            setSector("user");
          }}>
          User Home Selector
        </button>
        <button
          onClick={() => {
            setSector("admin");
          }}>
          Admin Home Selector
        </button>
        <br />
      </div>
      {sector === "user" && <User employees={employees} />}
      {sector === "admin" && <Admin employees={employees} setEmployees={setEmployees} id={id} setId={setId} />}
    </div>
  );
};

export default Home;
