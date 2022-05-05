import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

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