const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  isLoading: null,
  user: null
};

export default function(state = initialState, action) {
  switch (action.payload) {
    case "USER_LOADING":
      return { ...state, isLoading: true };
    case "USER_LOADED":
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload
      };
    case "LOGIN_SUCCESS":
      return;
    case "REGISTER_SUCCESS":
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false
      };
    case "AUTH_ERROR":
    case "LOGIN_FAIL":
    case "LOGOUT_FAIL":
    case "REGISTER_FAIL":
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false
      };
    default:
      return state;
  }
}
