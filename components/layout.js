import Head from 'next/head'
import Navbar from './navbar.js'
import Footer from './footer.js'

export default function Layout({ children }) {

  return (
    <>
	  <Head>
        <title>Vlasov Fedor Portfolio</title>
      </Head>
      <Navbar />
      	{children}
      <Footer />

    </>
  )
}