import {
  GuestSessionState,
  GuestSessionAction,
} from "../../../shared/types/moviesTypes";

export const GuestSessionReducer = (
  state: GuestSessionState,
  action: GuestSessionAction
): GuestSessionState => {
  switch (action.type) {
    case "REQUEST_SESSION":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "SESSION_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        guestSessionId: action.payload.guestSessionId,
        expiresAt: action.payload.expiresAt,
      };
    case "SESSION_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
