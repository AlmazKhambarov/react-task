import React, { useState } from "react";

const FormComponent = ({onSubmit})=> {

    const [formData, setFormData] = useState({
      nickname: '',
      type: 'user',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit(formData);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nickname"
          value={formData.nickname}
          onChange={handleChange}
          placeholder="Enter nickname or repo"
        />
        <select name="type" value={formData.type} onChange={handleChange}>
          <option value="user">User</option>
          <option value="repo">Repo</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    );
  };
  export default FormComponent