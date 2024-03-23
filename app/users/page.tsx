import React from "react";

interface User {
  id: number;
  name: string;
}

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();

  return (
    <>
      <h1>Users List</h1>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </>
  );
};

export default UsersPage;
