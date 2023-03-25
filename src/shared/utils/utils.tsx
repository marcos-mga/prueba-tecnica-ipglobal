export const needsCreateGuestSession = (
  guestSessionId: string,
  expiresAt: string
) => {
  return (
    guestSessionId === "" ||
    (guestSessionId && new Date(expiresAt).getTime() < new Date().getTime())
  );
};
