interface AuthCookie {
  access_token?: string;
  refresh_token?: string;
}

export const useAuth = (): AuthCookie => {
  let payload: any = {};

  const authCookie = useCookie("auth");

  payload = {
    access_token: (authCookie.value as any)?.access_token || "",
    refresh_token: (authCookie.value as any)?.access_token || "",
  };

  return payload;
};
