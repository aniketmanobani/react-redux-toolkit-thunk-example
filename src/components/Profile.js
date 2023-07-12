import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthSliceActions } from "../redux/slice/AuthSlice";

function Profile() {
  const username = useSelector((state) => state.Auth.username);
  const dispatch = useDispatch();

  const handleUsername = (e) => {
    dispatch(AuthSliceActions.setUsername(e.target.value));
  };
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter username"
          onChange={handleUsername}
        />
      </div>
      <div>Username is {username}</div>
    </div>
  );
}

export default Profile;
