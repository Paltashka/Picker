import { StatusBar } from "expo-status-bar";
import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import AppNavigator from "./src/navigation/AppNavigator";

import client from "./src/config/apollo";
// const client = new ApolloClient({
//   uri: "https://eve-admin.herokuapp.com/graphql/",
//   cache: new InMemoryCache(),
// });

export default function App() {
  return (
    <ApolloProvider client={client}>
      <AppNavigator />
      <StatusBar style="auto" />
    </ApolloProvider>
  );
}
