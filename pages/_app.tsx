import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import ErrorBoundary from '../components/ErrorBoundary'
import PrestoRabbit from '../components/PrestoRabbit'
import Footer from '../components/Footer'

import store from '../store'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps, ...obj }: AppProps) {
  return <Provider store={store}>
    <ErrorBoundary>
      <Component {...pageProps} />
      <Footer />
    </ErrorBoundary>
  </Provider>
}
