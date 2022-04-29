import { useState } from 'react';
import Link from 'next/link'

export default function Navbar() {
  const [showMe, setShowMe] = useState(false);
  function toggle(){
    setShowMe(!showMe);
  }	
  return (
	<nav className="navbar navbar-expand-md navbar-dark fixed-top">
        <div className="gradient"></div>

        <div className="container">
            <a className="navbar-brand" href="index.html">
                <img src="/images/logo.png" alt="" />
            </a>
            <button className="navbar-toggler"  onClick={toggle} type="button"  aria-label="Toggle navigation">
              <span><i className="fa fa-align-right" aria-hidden="true"></i></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse" style=
			{{
				display: showMe?"block":"none"
			}}>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="hidden">/</li>
                    <li className="nav-item">
                        <a className="nav-link" href="portfolio.html">Portfolio</a>
                    </li>
                    <li className="hidden">/</li>
                    <li className="nav-item">
                        <a className="nav-link" href="services.html">Services</a>
                    </li>
                    <li className="hidden">/</li>
                    <li className="nav-item">
                        <a className="nav-link" href="technology.html">Technologies</a>
                    </li>
                    <li className="hidden">/</li>
                    <li className="nav-item">
                        <a className="nav-link" href="blog.html">blog</a>
                    </li>
                    <li className="hidden">/</li>
                    <li className="nav-item">
                        <a className="nav-link" href="support.html">Support</a>
                    </li>
                    <li className="hidden">/</li>
                    <li className="nav-item">
                        <a className="nav-link" href="contact.html">Contact</a>
                    </li>
                </ul>
            </div>
        </div>


	<style jsx>{`
.navbar {
    width: 100%;
    height: auto;
    padding: 20px 0;
}

.navbar-dark .navbar-nav .nav-link {
    color: rgb(255, 255, 255);
    padding: 0;
    font-size: 14px;
    letter-spacing: 0.5px;
    font-weight: 500;
    text-transform: capitalize;
}

.navbar-dark .navbar-nav .nav-link:hover {
    color: rgb(255, 255, 255);
}

.navbar-dark .navbar-nav .hidden {
    font-size: 14px;
    line-height: 28px;
    font-weight: 500;
    padding: 0 15px;
    color: #ffffff;
}

.navbar .gradient {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgb(62, 39, 157);
    background: -moz-linear-gradient(-45deg, rgba(62, 39, 157, 1) 0%, rgba(9, 97, 241, 1) 100%);
    background: -webkit-linear-gradient(-45deg, rgba(62, 39, 157, 1) 0%, rgba(9, 97, 241, 1) 100%);
    background: linear-gradient(135deg, rgba(62, 39, 157, 1) 0%, rgba(9, 97, 241, 1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3e279d', endColorstr='#0961f1', GradientType=1);
}

.navbar .container {
    z-index: 9;
}

.navbar-dark .navbar-toggler {
    color: rgb(7, 227, 244);
    border-color: transparent;
}

.navbar-toggler {
    font-size: 23px;
}
    `}</style>
    </nav>
  )
}