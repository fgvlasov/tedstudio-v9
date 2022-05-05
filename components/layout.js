import Head from 'next/head'
import Navbar from './navbar.js'
import Footer from './footer.js'
import Features from './features.js'

export default function layout({ children }) {

  return (
    <>
	  <Head>
        <title>Vlasov Fedor Portfolio</title>
      </Head>
      <Navbar />
      	{children}
	  <Features />
      <Footer />

    </>
  )
}