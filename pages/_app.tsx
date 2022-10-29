import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import ErrorBoundary from '../components/ErrorBoundary'
import PrestoRabbit from '../components/PrestoRabbit'

export default function App({ Component, pageProps, ...obj }: AppProps) {
  return <ErrorBoundary>
    <Component {...pageProps} />
    <PrestoRabbit />
  </ErrorBoundary>
  
}
