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
    const newEmployee = userData;
    setEmployees([...employees, newEmployee]);
  };

  const deleteHandle = (id) => {
    const updatedList = employees.filter((employee) => id !== employee.id);
    setEmployees(updatedList);
  };

  return (
    <>
      <h2>Create User Here</h2>
      <form onSubmit={submitHandle}>
        <label htmlFor="id">ID</label>
        <input
          required
          type="text"
          name="id"
          id="id"
          onChange={(ev) => {
            setUserData({ ...userData, [ev.target.name]: ev.target.value });
          }}
        />
        <label htmlFor="name">Name</label>
        <input
          required
          type="text"
          name="name"
          id="name"
          onChange={(ev) => {
            setUserData({ ...userData, [ev.target.name]: ev.target.value });
          }}
        />
        <label htmlFor="lastname">Last Name</label>
        <input
          required
          type="text"
          name="lastname"
          id="lastname"
          onChange={(ev) => {
            setUserData({ ...userData, [ev.target.name]: ev.target.value });
          }}
        />
        <label htmlFor="position">Position</label>
        <input
          required
          type="text"
          name="position"
          id="position"
          onChange={(ev) => {
            setUserData({ ...userData, [ev.target.name]: ev.target.value });
          }}
        />
        <button type="submit">Save</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Position</th>
            <th>Action</th>
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
                <td>
                  <button onClick={() => deleteHandle(employee.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Admin;
