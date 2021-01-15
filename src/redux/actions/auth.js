import AuthService from "../../service/auth";
import encryptedLS from "libs/encryptedLS";

export const LoginAuth = (email, password) => (dispatch) => {
  return AuthService.login(email, password).then(
    (response) => {
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: { user: response },
      });
      encryptedLS.set("___user_data", response.data.data.token);
      return Promise.resolve();
    },
    (error) => {
      dispatch({
        type: "LOGIN_FAIL",
      });

      return Promise.reject();
    }
  );
};

export const logout = () => (dispatch) => {
  AuthService.logout();

  dispatch({
    type: "LOGOUT",
  });
};
