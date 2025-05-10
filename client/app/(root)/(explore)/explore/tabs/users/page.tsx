import UserCard from "@/components/UserCard";
import React, { Fragment } from "react";

const Users = () => {
  return (
    <Fragment>
      {new Array(5).fill(null).map((_, index: number) => (
        <UserCard key={index} />
      ))}
    </Fragment>
  );
};

export default Users;
