import * as actions from "./actionTypes"

export default function reducer(state, action) {
  switch (actions.SET_USER) {
    case "SET_USER":
      return { ...state, user: action.payload }
    default:
      return state
  }
}
