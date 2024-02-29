import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaRegUserCircle, FaPlus } from "react-icons/fa";
import "./ListScreen.css";

const ListScreen = () => {
  const members = useSelector((state) => state.members.members);

  return (
    <div className="list-container">
      <div className="header">
        <h1>Team Members</h1>
        <p>You have ({members.length}) members</p>
      </div>
      <Link to="/add" className="add-button">
        <FaPlus />
      </Link>
      {members.map((member) => (
        <div key={member.id} className="list-item">
          <Link to={`/edit/${member.id}`} className="member-link">
            <div className="member-details">
              <div className="profile-icon">
                <FaRegUserCircle />
              </div>
              <div className="details">
                <p>
                  <strong>
                    {member.firstName} {member.lastName}{" "}
                    {member.role==="admin" && "(Admin)"}
                  </strong>
                </p>
                <p>{member.phone}</p>
                <p>{member.email}</p>
              </div>
            </div>
          </Link>
          <hr className="separator" />
        </div>
      ))}
    </div>
  );
};

export default ListScreen;
