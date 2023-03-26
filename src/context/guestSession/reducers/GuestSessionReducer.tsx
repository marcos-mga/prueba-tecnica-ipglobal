import {
  GuestSessionState,
  GuestSessionAction,
} from "../../../shared/types/moviesTypes";
import * as actions from "./GuestSession.actions";

export const GuestSessionReducer = (
  state: GuestSessionState,
  action: GuestSessionAction
): GuestSessionState => {
  switch (action.type) {
    case actions.GET_GUEST_SESSION_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actions.GET_GUEST_SESSION_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        guestSessionId: action.payload.guestSessionId,
      };
    case actions.GET_GUEST_SESSION_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
