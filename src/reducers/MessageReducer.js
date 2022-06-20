const initialState = {
  errorMessage: "",
  successMessage: "",
};

export default function MessageReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "SET_ERROR":
      return { errorMessage: payload };
    case "CLEAR_ERROR":
      return { errorMessage: "" };
    case "SET_SUCCESS":
      return { successMessage: payload };
    case "CLEAR_SUCCESS":
      return { successMessage: "" };
    default:
      return state;
  }
}
