import React from "react";

const GetUserRepo = ({data}) => {
  return (
    <div>
      <p>Repository Name: {data?.full_name}</p>
      <p>Number of Stars: {data?.stargazers_count}</p>
    </div>
  );
};

export default GetUserRepo;
