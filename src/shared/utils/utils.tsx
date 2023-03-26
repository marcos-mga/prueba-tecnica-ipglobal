interface UserSession {
  guestSessionId: string;
  expiresAt: string;
}

export const setUserSession = (userSession: UserSession) => {
  localStorage.setItem("userSession", JSON.stringify(userSession));
};

export const getUserSession = (): UserSession | null => {
  const userSessionJson = localStorage.getItem("userSession");
  if (userSessionJson) {
    const userSession: UserSession = JSON.parse(userSessionJson);
    const expires_at = new Date(userSession.expiresAt).getTime();
    const now = new Date().getTime();
    if (now < expires_at) {
      return userSession;
    } else {
      removeUserSession();
      return null;
    }
  } else {
    return null;
  }
};

const removeUserSession = () => {
  localStorage.removeItem("userSession");
};
