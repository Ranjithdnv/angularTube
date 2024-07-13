export interface comment {
  useridCom: string;
  username: string;
  comment: string;
  videoid: string;
}
const item = localStorage.getItem('comments');
const user = item
  ? JSON.parse(item)
  : {
      useridCom: '656',
      username: 'ranjith',
      comment: 'kk',
      videoid: 'rahhhhhhhhhhhhhhm',
    };
export const initialState: comment[] = [user];

// Define action types
const SET_NAME = '[Comment] Set Username';
const SET_COMMENT = '[Comment] Set Comment';
const SET_VDID = '[Comment] Set Videoid';

// Define actions
interface Action {
  type: string;
  payload: comment;
}

export const setName = (a: comment): Action => ({
  type: SET_NAME,
  payload: a,
});
// export const setAge = (comment: string): Action => ({
//   type: SET_COMMENT,
//   payload: comment,
// });
// export const setEmail = (videoid: string): Action => ({
//   type: SET_VDID,
//   payload: videoid,
// });

// Create the reducer using a switch-case statement
export function CommentReducer(
  state = initialState,
  action: Action
): comment[] {
  switch (action.type) {
    case SET_NAME:
      let updated = false;
      console.log('rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr');
      state = state.map((value) => {
        if (value.useridCom === action.payload.useridCom) {
          updated = true;
          console.log('updateddd');
          console.log(action.payload);
          return action.payload;
        }
        return value;
      });
      console.log(state);

      if (!updated) {
        state.push(action.payload);
      }
      localStorage.setItem(
        'comment',
        JSON.stringify({
          state,
        })
      );

      return [...state];

    // case SET_COMMENT:
    //   localStorage.setItem(
    //     'user',
    //     JSON.stringify({
    //       ...state,
    //       comment: action.payload,
    //     })
    //   );
    //   return {
    //     ...state,
    //     age: action.payload,
    //   };
    // case SET_EMAIL:
    //   localStorage.setItem(
    //     'user',
    //     JSON.stringify({
    //       ...state,
    //       name: action.payload,
    //     })
    //   );
    //   return {
    //     ...state,
    //     email: action.payload,
    //   };
    default:
      return state;
  }
}
