import '@/styles/globals.css'
import Layout from '@/component/Layout/Layout'
import { StateContext } from '@/context/StateContext'

function App({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
          <Component {...pageProps} />
      </Layout>
    </StateContext>
  )
}

export default App