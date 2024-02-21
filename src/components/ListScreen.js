import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ListScreen = () => {
  const members = useSelector(state => state.members.members);
  
  return (
    <div>
      <h1>Team Members</h1>
      <p>You have {members.length} team members</p>
      <ul>
        {members.map(member => (
          <li key={member.id}>
            {member.firstName} {member.lastName} {member.role==="admin" && '(Admin)'}
            <Link to={`/edit/${member.id}`}>Edit</Link>
          </li>
        ))}
      </ul>
      <Link to="/add">Add Member</Link>
    </div>
  );
};

export default ListScreen;
