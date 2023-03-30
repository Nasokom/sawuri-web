import '@/styles/globals.css'
import Layout from '@/component/Layout/Layout'

function App({ Component, pageProps }) {
  return (
      <Layout>
          <Component {...pageProps} />
      </Layout>
  )
}

export default App