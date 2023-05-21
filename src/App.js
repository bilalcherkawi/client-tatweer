import logo from "./logo.svg";
import "./App.css";

function App() {
  const createDummyRows = () => {
    let users = [];
    for (let i = 0; i < 11; i++) {
      let user = {
        id: "id" + i,
        firstName: `firstName ${i}`,
        lastName: `lastName ${i}`,
        dob: "2000-10-10",
      };
      users.push(user);
    }
    console.log(users);
    return users;
  };
  return (
    <div className="App">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>User id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>DOB</th>
          </tr>
        </thead>
        <tbody>
          {createDummyRows().map((value, index) => {
            return (
              <tr key={index}>
                <td>{value.id}</td>
                <td>{value.firstName}</td>
                <td>{value.lastName}</td>
                <td>{value.dob}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
