import React from "react";

const GetUserInfo = ({data}) => {
  return (
    <div>
      <p>Full Name: {data?.name}</p>
      <p>Number of Repositories: {data?.public_repos}</p>
    </div>
  );
};

export default GetUserInfo;
