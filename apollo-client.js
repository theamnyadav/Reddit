import {
    ApolloClient,
    InMemoryCache,
    
  } from "@apollo/client";

  const client = new ApolloClient({
    uri: ' https://public562007e2f6bc1853.stepzen.net/api/unhinged-tiger/__graphql',
    headers: {
        Authorization:`Apikey ${process.env.NEXT_PUBLIC_STEPZEN_KEY}`
    },
    cache: new InMemoryCache()
  });

  export default client
