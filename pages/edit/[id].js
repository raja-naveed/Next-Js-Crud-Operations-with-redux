'use client'
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from 'next/router';
import { updateUser } from "@/redux/UserReducer";

const Edit = () => {
    const router = useRouter();
    const { id } = router.query;
  const users = useSelector((state) => state.users);
  const existingUser = users.find((user) => user.id ==id);
  const { name, email } = existingUser; 
  const [uname, setName] = useState(name);
  const [uemail, setEmail] = useState(email);
  const dispatch = useDispatch();

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("Updating user:", { id, name: uname, email: uemail }); // Log the payload
    dispatch(updateUser({ 
      id, name: uname, email: uemail
     }));
    console.log("Updated user:", users); // Log the updated state
    router.push('/');
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>Update User</h3>
        <form onSubmit={handleUpdate}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Name"
              value={uname}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="enter your email"
              value={uemail}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>{" "}
          <br />
          <button className="btn btn-primary">Update</button>
        </form>
      </div>
    </div>
  );
};

export default Edit;
