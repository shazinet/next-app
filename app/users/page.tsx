import React from "react";
import UserTable from "./UserTable";

interface Props {
  searchParams: { sortOrder: string };
}

const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {
  return (
    <>
      <h1>
        Users List{" "}
        <small className="text-red-400">
          {sortOrder ? "sorted by " : ""} {sortOrder}
        </small>
      </h1>
      <UserTable sortOrder={sortOrder} />
    </>
  );
};

export default UsersPage;
