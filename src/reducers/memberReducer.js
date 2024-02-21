import { ADD_MEMBER, DELETE_MEMBER, EDIT_MEMBER } from '../actions/types';

const initialState = {
  members: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_MEMBER:
      return {
        ...state,
        members: [...state.members, action.payload]
      };
    case DELETE_MEMBER:
      return {
        ...state,
        members: state.members.filter(member => member.id !== action.payload)
      };
    case EDIT_MEMBER:
      return {
        ...state,
        members: state.members.map(member =>
          member.id === action.payload.id ? action.payload : member
        )
      };
    default:
      return state;
  }
}
