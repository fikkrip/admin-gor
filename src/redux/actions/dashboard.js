import SubmissionService from "service/submission";

export const handleStepper = (steppers) => (dispatch) => {
  return dispatch({
    type: "HANDLE_STEPPER",
    payload: { ...steppers },
  });
};

export const handleTitlePage = (title) => (dispatch) => {
  return dispatch({
    type: "TITLE_PAGE",
    payload: title,
  });
};

export const getSubmissions = (payload) => async (dispatch) => {
  const submissions = await SubmissionService.getSubmissions(payload);
  return dispatch({
    type: "GET_SUBMISSION",
    payload: submissions
  });
}
