import { useState} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';



function App() {

  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (usrName, usrAge) => {
    setUsersList((prev) => {
      return [...prev, {id: Math.random().toString(), name: usrName, age: usrAge}];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UsersList users={usersList}></UsersList>
    </div>
  );
}

export default App;
