import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { editMember, deleteMember } from "../actions/memberActions";
import "./PersonalDetails.css"; // Import CSS file

const EditScreen = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const member = useSelector((state) =>
    state.members.members.find((member) => member.id === parseInt(id))
  );

  const [firstName, setFirstName] = useState(member.firstName);
  const [lastName, setLastName] = useState(member.lastName);
  const [phone, setPhone] = useState(member.phone);
  const [email, setEmail] = useState(member.email);
  const [role, setRole] = useState(member.role);

  const handleSubmit = (e) => {
    e.preventDefault();
    const editedMember = {
      id: parseInt(id),
      firstName,
      lastName,
      phone,
      email,
      role,
    };
    dispatch(editMember(editedMember));
    history.push("/");
  };

  const handleDelete = () => {
    dispatch(deleteMember(parseInt(id)));
    history.push("/");
  };

  return (
    <div className="container">
      <div className="form-container">
        <h1>Edit team member</h1>
        <p>Edit contact info, location and role.</p>
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
          <button type="save">Save</button>
          <button type="delete" onClick={handleDelete}>
            Delete
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditScreen;
