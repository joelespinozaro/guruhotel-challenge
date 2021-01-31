import { ApolloClient, InMemoryCache } from '@apollo/client';

const urlAPI = process.env.NEXT_PUBLIC_YELP_URL;
const token = `Bearer ${process.env.NEXT_PUBLIC_YELP_TOKEN}`;

function createApolloClient() {
  return new ApolloClient({
    uri: urlAPI,
    fetchOptions: {
      mode: 'no-cors',
    },
    headers: {
      authorization: token,
    },
    cache: new InMemoryCache(),
  });
}

export async function useApollo(query) {
  const client = createApolloClient();

  try {
    const { data } = await client.query({
      query: query,
    });
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}
