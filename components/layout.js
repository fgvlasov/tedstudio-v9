import Head from 'next/head'
import Navbar from './navbar'
import Footer from './footer.js'
import Script from 'next/script'

export default function Layout({ children }) {
  return (
    <>
	  <Head>
        <title>Fedor Portfolio</title>
	    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
	    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
		<link rel="preconnect" href="https://fonts.googleapis.com" />
		<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
	    <link href="https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700|Playfair+Display:400,700,900" rel="stylesheet" />

		<link rel="stylesheet" href="/css/global.css" />
		<link rel="stylesheet" href="/css/media.css" />
      </Head>
      <Navbar />
      {children}
      <Footer />


    </>
  )
}