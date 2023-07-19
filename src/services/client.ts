import { ApolloClient, InMemoryCache } from '@apollo/client';

export function createApolloClient() {
  return new ApolloClient({
    uri: 'https://graphql.anilist.co',
    cache: new InMemoryCache(),
  });
}