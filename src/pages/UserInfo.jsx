import React, { useState } from "react";
import FormComponent from "./components/FormComponent";
import GetUserInfo from "./components/GetUserInfo";
import GetUserRepo from "./components/GetUserRepo";

const UserInfo = () => {
  const [data, setData] = useState();
  const [error, setError] = useState();

  const fetchData = async (formData) => {
    const { nickname, type } = formData;
    const url =
      type === "user"
        ? `https://api.github.com/users/${nickname}`
        : `https://api.github.com/repos/${nickname}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        setError(response.message)
        throw new Error("Failed to fetch data");
      }
      const result = await response.json();
      setData(result);
      setError(null);
    } catch (error) {
      setData(null);
      setError("Failed to fetch data");
    }
  };
  console.log(data)
  return (
    <>
      <FormComponent onSubmit={fetchData} />
      {error?error:data?.login ? <GetUserInfo data={data}/> : <GetUserRepo data={data}/>}
    </>
  );
};

export default UserInfo;
