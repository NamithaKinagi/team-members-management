import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addMember } from "../actions/memberActions";
import "./PersonalDetails.css"; // Import CSS file

const AddScreen = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("regular");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMember = {
      id: Date.now(),
      firstName,
      lastName,
      phone,
      email,
      role,
    };
    dispatch(addMember(newMember));
    history.push("/");
  };

  return (
    <div className="container">
      <div className="form-container">
        <h1>Add a team member</h1>
        <p>Set email, location and role.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <div>
              <label>
                <input
                  type="radio"
                  value="regular"
                  checked={role === "regular"}
                  onChange={() => setRole("regular")}
                />
                Regular
              </label>
            </div>
          </div>
          <div className="form-group">
            <div>
              <label>
                <input
                  type="radio"
                  value="admin"
                  checked={role === "admin"}
                  onChange={() => setRole("admin")}
                />
                Admin
              </label>
            </div>
          </div>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default AddScreen;
