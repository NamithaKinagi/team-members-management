import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addMember } from '../actions/memberActions';

const AddScreen = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('regular');

  const handleSubmit = e => {
    e.preventDefault();
    const newMember = {
      id: Date.now(),
      firstName,
      lastName,
      phone,
      email,
      role
    };
    dispatch(addMember(newMember));
    history.push('/');
  };

  return (
    <div>
      <h1>Add Member</h1>
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
      </form>
    </div>
  );
};

export default AddScreen;
