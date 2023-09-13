import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import User from "./User";
import Admin from "./Admin";

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
  useEffect(() => {}, [sector, mockEmployees]);
  return (
    <>
      <h1>
        Generation Thailand
        <br />
        React - Assessment
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
        {sector === "user" && <User employees={employees} />}
        {sector === "admin" && <Admin employees={employees} setEmployees={setEmployees} />}
      </div>
    </>
  );
};

export default Home;
