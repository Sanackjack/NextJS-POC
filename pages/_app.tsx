import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import "../styles/test.css"

function MyApp({ Component, pageProps }: AppProps) {


  return <>
    Test Next JS Page _APP.tsx
    <Nav></Nav>

    {/* test style golbal */}
    <div className='test-content'>
      <Component {...pageProps} />
    </div>

    <Footer></Footer>
  </>
}

export default MyApp
