import axios from "axios";
import { toast } from "react-toastify";
import Router from "next/router";
import "react-toastify/dist/ReactToastify.min.css";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 1000,
});

axiosInstance.interceptors.response.use(
  function (response) {
    toast.success(response.data.message, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });
    return Promise.resolve(response);
  },
  function (error) {
    if (!error.response) {
      return toast.error("Please check your internet connection.", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
    }
    let message = buildErrorMessage(error);

    toast.error(
      <div>
        <h4 style={{ color: "white", fontWeight: "bold" }}>Oops Error!</h4>
        {message}
      </div>,
      {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      }
    );
    // check if session expired
    if (error.response.status == 401) {
      localStorage.removeItem("___user_data");
      return Router.replace("/login") 
    }
    return Promise.reject(error);
  }
);

const buildErrorMessage = (error) => {
  let message =
    error.response.data && error.response.data.values
      ? error.response.data.values
      : error.response.data.message
      ? error.response.data.message
      : null;
  let flashMessage = [];
  if (typeof message === "object") {
    for (let err of Object.keys(message)) {
      if (message[err].length > 0) {
        flashMessage.push(<div key={message[err][0]}>{message[err][0]}</div>);
      } else {
        flashMessage.push(message[err]);
      }
    }
  } else {
    flashMessage = message;
  }
  if (Array.isArray(flashMessage) && flashMessage.length > 0) {
    flashMessage = flashMessage.join("\n");
  } else {
    flashMessage = flashMessage;
  }
  return flashMessage;
};

export default axiosInstance;
