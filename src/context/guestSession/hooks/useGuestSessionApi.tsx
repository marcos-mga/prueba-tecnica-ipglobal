import * as actions from "../reducers/GuestSession.actions";

export const useGuestSessionApi = (dispatch: any) => {
  const createGuestSession = async () => {
    dispatch({ type: actions.GET_GUEST_SESSION_REQUEST });
    try {
      const response = await fetch(
        `${process.env.REACT_APP_TMDB_GUEST_SESSION_ENDPOINT}?api_key=${process.env.REACT_APP_API_KEY}`
      );
      const data = await response.json();
      const { guest_session_id: guestSessionId, expires_at: expiresAt } = data;
      console.log({ guestSessionId });
      dispatch({
        type: actions.GET_GUEST_SESSION_SUCCESS,
        payload: { guestSessionId, expiresAt },
      });
    } catch (error) {
      dispatch({
        type: actions.GET_GUEST_SESSION_ERROR,
        payload: { error },
      });
    }
  };
  return { createGuestSession };
};
