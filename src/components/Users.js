import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthSliceActions } from "../redux/slice/AuthSlice";

function Users() {
  const users = useSelector((state) => state.Auth.users);
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(AuthSliceActions.updateUserList(username));
  };

  const handleReset = () => {
    dispatch(AuthSliceActions.resetUsers());
  };

  return (
    <div>
      <h1>Users List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter username"
          onChange={handleUsername}
        />
        <button onClick={handleSubmit}>Add</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <div>
        {users.map((m) => (
          <div>
            <li>{m}</li>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
