export default function Footer() {
  return (
	<footer className="page-footer">
        <div className="gradient"></div>

        <div className="container">


            <div className="row text-center d-flex justify-content-center">


                <div className="col-md-12">
                    <ul>
                        <li><a href="index.html">Home </a></li>
                        <li><a href="portfolio.html">Portfolio </a></li>
                        <li><a href="services.html">Services </a></li>
                        <li><a href="contact.html">Contact</a></li>
                        <li><a href="support.html">Support</a></li>
                        <li><a href="technology.html">Technologies</a></li>
                    </ul>
                </div>

            </div>

            <div className="row text-center">

                <div className="col-md-12 footer-copyright">
                    <p>© 2018, All Rights Reserved. Designed by
                        <a href="https://www.template.net/editable/websites/html5" target="_blank"> Template.net</a></p>
                </div>

            </div>


            <div className="row d-flex text-center justify-content-center">


                <div className="col-md-8 col-12">
                    <a href="index.html"><img src="/images/logo.png" alt="footer-logo" /></a>
                </div>


            </div>

        </div>
	<style jsx>{`
footer {
    width: 100%;
    height: auto;
    color: #ffffff;
    position: relative;
    padding-top: 60px;
    padding-bottom: 80px;
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
    background-image: url("/images/footer-bg-image.jpg");
}

footer ul {
    padding-bottom: 20px;
}

footer ul li {
    font-size: 16px;
    display: inline-block;
    padding: 10px 0;
    text-transform: capitalize;
}

footer p {
    position: relative;
    font-size: 16px;
    letter-spacing: 0.6px;
    font-weight: 500;
    padding-bottom: 30px;
    color: rgba(255, 255, 255, 0.60);
}

footer ul li:after {
    content: "|";
    font-size: 13px;
    font-weight: 500;
    color: #ffffff;
    padding: 0 20px;
    width: 100%;
}

footer ul > li:last-child::after {
    display: none;
}

footer ul li a {
    font-weight: 500;
    letter-spacing: 0.6px;
    color: rgba(255, 255, 255, 0.60);
}

footer ul li a:hover {
    color: rgba(0, 255, 255, 0.60);
}

footer .footer-copyright a {
    color: rgba(0, 255, 255, 0.60);
}

footer .gradient {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background: -moz-linear-gradient(-45deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.9) 100%);
    background: -webkit-linear-gradient(-45deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.9) 100%);
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.9) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e6000000', endColorstr='#e6000000', GradientType=1);
}
    `}</style>
    </footer>
	)
}