import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://jsonplaceholder.ir/graphql",
  cache: new InMemoryCache(),
});

export default client;
