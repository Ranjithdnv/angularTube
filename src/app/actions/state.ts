export interface ProfileState {
  name: string;
  age: number;
  email: string;
}
const item = localStorage.getItem('user');
const user = item ? JSON.parse(item) : { name: '', age: 0, email: '' };
export const initialState: ProfileState = user;

// Define action types
const SET_NAME = '[Profile] Set Name';
const SET_AGE = '[Profile] Set Age';
const SET_EMAIL = '[Profile] Set Email';

// Define actions
interface Action {
  type: string;
  payload?: any;
}

export const setName = (name: string): Action => ({
  type: SET_NAME,
  payload: name,
});
export const setAge = (age: number): Action => ({
  type: SET_AGE,
  payload: age,
});
export const setEmail = (email: string): Action => ({
  type: SET_EMAIL,
  payload: email,
});

// Create the reducer using a switch-case statement
export function profileReducer(
  state = initialState,
  action: Action
): ProfileState {
  switch (action.type) {
    case SET_NAME:
      localStorage.setItem(
        'user',
        JSON.stringify({
          ...state,
          name: action.payload,
        })
      );
      return {
        ...state,
        name: action.payload,
      };
    case SET_AGE:
      localStorage.setItem(
        'user',
        JSON.stringify({
          ...state,
          name: action.payload,
        })
      );
      return {
        ...state,
        age: action.payload,
      };
    case SET_EMAIL:
      localStorage.setItem(
        'user',
        JSON.stringify({
          ...state,
          name: action.payload,
        })
      );
      return {
        ...state,
        email: action.payload,
      };
    default:
      return state;
  }
}
