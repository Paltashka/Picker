import React, { useState } from "react";

function useAuth() {
  const [auth, setAuth] = useState(false);

  return auth;
}

export default useAuth;
