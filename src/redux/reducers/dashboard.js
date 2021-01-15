const initialState = {
  steppers: {
    ChooseYourOrder: {
      activeStatus: true,
      active: true,
    },
    ChooseSchedule: {
      activeStatus: true,
      active: true,
    },
    SelectProduct: {
      activeStatus: false,
      active: false,
    },
    ReviewYourOrder: {
      activeStatus: false,
      active: false,
    },
    Payment: {
      activeStatus: false,
      active: false,
    },
  },
  titlePage: "Home",
  submissions: [],
};

const dashboard = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "HANDLE_STEPPER":
      return {
        ...state,
        steppers: {
          ...state.steppers,
          ...payload.steppers,
        },
      };
    case "TITLE_PAGE":
      return {
        ...state,
        titlePage: payload,
      };
    case "GET_SUBMISSION":
      return {
        ...state,
        submissions: payload,
      };
    default:
      return state;
  }
};

export default dashboard;
