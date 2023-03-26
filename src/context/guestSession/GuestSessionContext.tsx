import {
  GuestSessionContextType,
  GuestSessionState,
} from "../../shared/types/moviesTypes";
import { createContext, useContext, useReducer, useEffect } from "react";
import { GuestSessionReducer } from "./reducers/GuestSessionReducer";
import { useGuestSessionApi } from "./hooks/useGuestSessionApi";
import { getUserSession } from "../../shared/utils/utils";

const GuestSessionContext = createContext<GuestSessionContextType | null>(null);

export const useGuestSessionContext = () => {
  const context = useContext(GuestSessionContext);
  if (!context) {
    throw new Error("useMoviesContext must be used within a GuestSessionProvider");
  }

  return context;
};

const GuestSessionProvider = ({ children }: { children: React.ReactNode }) => {
  const initialState: GuestSessionState = {
    guestSessionId: "",
    loading: false,
    error: "",
  };
  const [state, dispatch] = useReducer(GuestSessionReducer, initialState);
  const { guestSessionId } = state;
  const { createGuestSession } = useGuestSessionApi(dispatch);

  const guestSession = getUserSession();
  useEffect(() => {
    guestSession ?? createGuestSession();
  }, []);

  return (
    <GuestSessionContext.Provider
      value={{
        guestSessionId: guestSessionId || guestSession?.guestSessionId,
      }}
    >
      {children}
    </GuestSessionContext.Provider>
  );
};

export default GuestSessionProvider;
