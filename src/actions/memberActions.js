import { ADD_MEMBER, DELETE_MEMBER, EDIT_MEMBER } from './types';

export const addMember = member => ({
  type: ADD_MEMBER,
  payload: member
});

export const deleteMember = id => ({
  type: DELETE_MEMBER,
  payload: id
});

export const editMember = member => ({
  type: EDIT_MEMBER,
  payload: member
});
