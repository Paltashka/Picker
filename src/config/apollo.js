import {
  ApolloClient,
  HttpLink,
  ApolloLink,
  InMemoryCache,
  concat,
} from "@apollo/client";

const httpLink = new HttpLink({
  uri: "https://test.grocery-backend.io/",
});

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      authorization:
        "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MDkzMjIwODcsImV4cCI6MTYwOTMyMjM4NywidG9rZW4iOiJHeG44dzFyZjNTV00iLCJlbWFpbCI6ImhpQHBpY2tlcnkuZGUiLCJ0eXBlIjoiYWNjZXNzIiwidXNlcl9pZCI6IlZYTmxjam8zTWc9PSIsImlzX3N0YWZmIjp0cnVlfQ._wu5VOHOCLa0UVeHtdBV5IiFD38RrkKxAF4m8-lol0A",
    },
  });

  return forward(operation);
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink),
});

export default client;
