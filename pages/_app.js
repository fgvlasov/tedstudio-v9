import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layout.js'

export default function MyApp({ Component, pageProps }) {
  return (
	<ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
	</ChakraProvider>
  )
}