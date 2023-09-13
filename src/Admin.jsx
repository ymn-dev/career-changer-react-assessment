import React from "react";
import { useState } from "react";
const Admin = (props) => {
  const { employees, setEmployees } = props;
  const [userData, setUserData] = useState({
    id: "",
    name: "",
    lastName: "",
    position: "",
  });
  const submitHandle = (event) => {
    event.preventDefault();
    if (userData.id === "" || userData.name === "" || userData.lastname === "" || userData.position === "") return;
    const newEmployee = userData;
    setEmployees([...employees, newEmployee]);
  };

  return (
    <>
      <h2>Create User Here</h2>
      <form>
        <label htmlFor="id">ID</label>
        <input type="text" name="id" id="id" />
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="lastname">Last Name</label>
        <input type="text" name="lastname" id="lastname" />
        <label htmlFor="position">Position</label>
        <input type="text" name="position" id="position" />
        <button type="submit">Save</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => {
            console.log(employee);
            return (
              <tr key={employee.id}>
                <td>{employee.name}</td>
                <td>{employee.lastname}</td>
                <td>{employee.position}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Admin;
