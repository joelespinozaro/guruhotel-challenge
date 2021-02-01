import Head from 'next/head';
import { Provider } from 'react-redux';
import store from '../store';
import '../styles/global.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>GuruHotel Challenge</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
