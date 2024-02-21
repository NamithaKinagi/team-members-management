import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { editMember, deleteMember } from '../actions/memberActions';

const EditScreen = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const member = useSelector(state => state.members.members.find(member => member.id === parseInt(id)));

  const [firstName, setFirstName] = useState(member.firstName);
  const [lastName, setLastName] = useState(member.lastName);
  const [phone, setPhone] = useState(member.phone);
  const [email, setEmail] = useState(member.email);
  const [role, setRole] = useState(member.role);

  const handleSubmit = e => {
    e.preventDefault();
    const editedMember = {
      id: parseInt(id),
      firstName,
      lastName,
      phone,
      email,
      role
    };
    dispatch(editMember(editedMember));
    history.push('/');
  };

  const handleDelete = () => {
    dispatch(deleteMember(parseInt(id)));
    history.push('/');
  };

  return (
    <div>
      <h1>Edit Member</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)} />
        <input type="text" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} />
        <input type="text" placeholder="Phone" value={phone} onChange={e => setPhone(e.target.value)} />
        <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <select value={role} onChange={e => setRole(e.target.value)}>
          <option value="regular">Regular</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit">Save</button>
        <button type="button" onClick={handleDelete}>Delete</button>
      </form>
    </div>
  );
};

export default EditScreen;
