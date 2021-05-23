import '../styles/output/antd.css'
import '../styles/globals.css'

import { store } from '../lib/store';
import { Provider } from 'react-redux';

import type { AppProps /*, AppContext */ } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
