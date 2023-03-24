import {
  GuestSessionContextType,
  GuestSessionState,
} from "../../shared/types/moviesTypes";
import { createContext, useContext, useReducer } from "react";
import { GuestSessionReducer } from "./reducers/GuestSessionReducer";
import { useGuestSessionApi } from "./hooks/useGuestSessionApi";

const GuestSessionContext = createContext<GuestSessionContextType | null>(null);

export const useGuestSessionContext = () => {
  const context = useContext(GuestSessionContext);
  if (!context) {
    throw new Error("useMoviesContext must be used within a MoviesProvider");
  }

  return context;
};

const GuestSessionProvider = ({ children }: { children: React.ReactNode }) => {
  const initialState: GuestSessionState = {
    guestSessionId: "",
    expiresAt: "",
    loading: false,
    error: "",
  };

  const [state, dispatch] = useReducer(GuestSessionReducer, initialState);
  const { guestSessionId, expiresAt } = state;
  const { createGuestSession } = useGuestSessionApi(dispatch);

  return (
    <GuestSessionContext.Provider
      value={{
        guestSessionId,
        expiresAt,
        createGuestSession,
      }}
    >
      {children}
    </GuestSessionContext.Provider>
  );
};

export default GuestSessionProvider;
