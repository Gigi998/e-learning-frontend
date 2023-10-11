type AuthType = {
  email: string;
  accessToken: string;
};

export type AuthContext = {
  auth: AuthType;
  setAuth: React.Dispatch<React.SetStateAction<{ email: string; accessToken: string }>>;
};
