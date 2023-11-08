import { handleActions } from "redux-actions";

const FETCH_LOGIN = "login/FETCH_LOGIN";

const initialState = {
  login: false,
};

export default {
  fetchLoginActionCreator(login) {
    return { type: FETCH_LOGIN, login };
  },
  reducer: handleActions(
    {
      [FETCH_LOGIN]: (state, action) => {
        console.log(action);
        console.log(state);
        return {
          ...state,
          login: action.login,
        };
      },
    },
    initialState
  ),
};
