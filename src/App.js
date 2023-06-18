import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/users')
      .then((response) => {
        const data = response.data;
        if (Array.isArray(data)) {
          setUsers(data);
        } else {
          console.error('Invalid response data:', data);
        }
      })
      .catch((error) => console.error('Error fetching users:', error));
  }, []);

  return (
    <div>
      <h1>User Table</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Username</th>
            <th>Birth Date</th>
            <th>Image</th>
            <th>Height</th>
            <th>Weight</th>
            <th>Address</th>
            <th>Bank</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstname}</td>
              <td>{user.lastname}</td>
              <td>{user.age}</td>
              <td>{user.gender}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.birthdate}</td>
              <td>
                <img src={user.image} alt="User" height="50" />
              </td>
              <td>{user.height}</td>
              <td>{user.weight}</td>
              <td>{user.address}</td>
              <td>{user.bank}</td>
              <td>{user.company}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
