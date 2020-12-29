import {
  ApolloClient,
  HttpLink,
  ApolloLink,
  InMemoryCache,
  concat,
} from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";

const httpLink = new HttpLink({
  uri: "https://eve-admin.herokuapp.com/graphql/",
});

const authMiddleware = new ApolloLink((operation, forward) => {
  // AsyncStorage.getItem("token")
  operation.setContext({
    headers: {
      authorization:
        "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InBhbHRhc2hrYTUwQGdtYWlsLmNvbSIsImV4cCI6MTYwOTE2OTc0MCwib3JpZ0lhdCI6MTYwOTE2OTQ0MCwidXNlcl9pZCI6IlZYTmxjam96TkE9PSIsImlzX3N0YWZmIjp0cnVlLCJpc19zdXBlcnVzZXIiOmZhbHNlfQ.vgq1BCe5vCyDzEfWDIoahOQWQnGn2Uvq32FNK-sHM-Y",
    },
  });

  return forward(operation);
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink),
});

export default client;
