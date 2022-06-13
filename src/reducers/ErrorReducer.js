const initialState = {};
export default function ErrorReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "SET_ERROR":
      return { message: payload };
    case "CLEAR_ERROR":
      return { message: "" };
    default:
      return state;
  }
}
