import { useEffect, useState } from "react";
const Data = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((response) => {
        response.json();
      })
      .then((data) => {
        setUsers(data);
        console.log(users);
      });
  }, []);

  return <div>{users}</div>;
};
export default Data;
