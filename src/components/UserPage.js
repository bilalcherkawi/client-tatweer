import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
// onCreation complete of this component .The first method react useeffect

const UserPage = () => {
  const [persons, setPersons] = useState([]);
  const [person, setPerson] = useState([], null);
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
  const selectClickHandler = (event, person) => {
    setPerson(person);
  };
  const addNewRecord = () => {
    const newPerson = {
      id: 11,
      name: "Test",
      username: "test",
      email: "test@gmail.com",
      phone: "03138782",
      website: "wwww.google.com",
      address: {
        street: "azki",
        city: "tripoli",
      },
    };
    setPersons([...persons, newPerson]);
  };
  return (
    <div className="container">
      <button
        className="btn btn-secondary btn-sm"
        style={{ float: "left" }}
        onClick={addNewRecord}
      >
        Insert
      </button>
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
            <th>Address</th>
            <th>Select</th>
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
                <td>
                  <span className="text-success">{`${item.address.street} ${item.address.city}`}</span>
                </td>
                <td>
                  <button
                    className="btn"
                    onClick={(event) => {
                      selectClickHandler(event, item);
                    }}
                  >
                    Select
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <p>{person.name}</p>
    </div>
  );
};
export default UserPage;
