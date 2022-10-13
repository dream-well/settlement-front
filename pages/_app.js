import '../styles/globals.css'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context';

import { onError } from '@apollo/client/link/error'
import Auth from '../components/Auth'
import { store, wrapper } from "../store/store";
import { Provider } from 'react-redux';
import { Web3ReactProvider } from '@web3-react/core'
import { ethers } from "ethers";
import 'rsuite/dist/rsuite.min.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Web3ReactProvider
          getLibrary={getLibrary}
        >
        <Auth>
          <ApolloProvider client={client}>
            <Component {...pageProps} />
          </ApolloProvider>
        </Auth>
      </Web3ReactProvider>
    </Provider>
  )
    
}


const getLibrary = (provider) => {
  const library = new ethers.providers.Web3Provider(provider);
  library.pollingInterval = 8000; // frequency provider is polling
  return library;
};

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if(graphqlErrors) {
    graphqlErrors.map(({message, location, path}) => {
      alert( `Graphql error ${message}`)
    })
  }
})

const link = from([
  errorLink,
  new HttpLink({ uri: "https://metamusik.cleverapps.io/graphql" }),
])


const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(link),
})
