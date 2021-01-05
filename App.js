import { StatusBar } from "expo-status-bar";
import React from "react";
import { ApolloProvider } from "@apollo/client";

import AppNavigator from "./src/navigation/AppNavigator";

import client from "./src/config/apollo";
import { AuthProvider } from "./src/contexts/AuthProvider";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <AppNavigator />
        <StatusBar style="auto" />
      </AuthProvider>
    </ApolloProvider>
  );
}
