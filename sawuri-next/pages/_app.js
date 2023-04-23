import '@/styles/globals.css'
import Layout from '@/component/Layout/Layout'
import { StateContext } from '@/context/StateContext'
import { Analytics } from '@vercel/analytics/react'

function App({ Component, pageProps }) {
  return (
    <StateContext>
      <Analytics/>
      <Layout>
          <Component {...pageProps} />
      </Layout>
    </StateContext>
  )
}

export default App