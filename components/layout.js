import Head from 'next/head'
import Navbar from 'navbar-1.js'
import Footer from 'footer-1.js'
import Features from 'features-1.js'

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