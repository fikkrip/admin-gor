
  const initialState = {
    isLoggedIn: false,
    user: {}
  }
  
  export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case "LOGIN_SUCCESS":
        return {
          ...state,
          isLoggedIn: true,
          user: JSON.parse(localStorage.getItem('user')),
        };
      case "LOGIN_FAIL":
        return {
          ...state,
          isLoggedIn: false,
          user: null,
        };
      case "LOGOUT":
        return {
          ...state,
          isLoggedIn: false,
          user: null,
        };
      default:
        return state;
    }
  }