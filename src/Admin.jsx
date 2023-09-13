import React from "react";
import { useState } from "react";
const Admin = (props) => {
  const { employees, setEmployees, id, setId } = props;
  const [userData, setUserData] = useState({
    id: "",
    name: "",
    lastName: "",
    position: "",
  });
  const submitHandle = (event) => {
    event.preventDefault();
    const newEmployee = { ...userData, id: id };
    setEmployees([...employees, newEmployee]);
    setId((previousId) => previousId + 1);
  };

  const deleteHandle = (id) => {
    const updatedList = employees.filter((employee) => id !== employee.id);
    setEmployees(updatedList);
  };

  return (
    <>
      <h2 className="adminH2">Create User Here</h2>
      <form onSubmit={submitHandle}>
        {/* <input
          required
          type="text"
          name="id"
          id="id"
          onChange={(ev) => {
            setUserData({ ...userData, [ev.target.name]: ev.target.value });
          }}
        /> */}
        <input
          required
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          onSubmit={(ev) => {
            setUserData({ ...userData, [ev.target.name]: ev.target.value });
          }}
        />
        <input
          required
          type="text"
          name="lastname"
          id="lastname"
          placeholder="Last Name"
          onSubmit={(ev) => {
            setUserData({ ...userData, [ev.target.name]: ev.target.value });
          }}
        />
        <input
          required
          type="text"
          name="position"
          id="position"
          placeholder="Position"
          onSubmit={(ev) => {
            setUserData({ ...userData, [ev.target.name]: ev.target.value });
          }}
        />
        <button type="submit" id="employeeSave">
          Save
        </button>
        <br />
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
                  <button id="employeeDelete" onClick={() => deleteHandle(employee.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button
        onClick={() => {
          setEmployees([]);
        }}
        id="tableDelete">
        Delete
      </button>
    </>
  );
};

export default Admin;
