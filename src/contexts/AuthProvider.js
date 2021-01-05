import React, { useState, useContext, useEffect } from "react";
import { useMutation } from "@apollo/client";

import { TOKEN_CREATE } from "../graphql/mutations";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState("");

  const [tokenCreate, { data }] = useMutation(TOKEN_CREATE);

  function signup(email, pass) {
    console.log("signup");
    tokenCreate({
      variables: { email, password: pass },
    });
  }

  useEffect(() => {
    try {
      if (data.tokenCreate.token) setCurrentUser(data.tokenCreate.token);
      console.log(data.tokenCreate.token);
    } catch (_) {}
  }, [data]);

  const value = {
    currentUser,
    signup,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
