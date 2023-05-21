import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
// onCreation complete of this component .The first method react useeffect

const UserPage = () => {
  const [persons, setPersons] = useState([]);
  useEffect(() => {
    loadUsersFromExternalAPI();
  }, []);
  const loadUsersFromExternalAPI = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => {
        const persons = res.data;
        setPersons(persons);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container">
      <h3>persons page</h3>
      <table className="table w-100">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>website</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.website}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default UserPage;
