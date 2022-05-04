export default function BoostBlock() {
  return (
    <div className="another">
        <div className="gradient"></div>
        <div className="container">
                <div className="col-md-12">
                    <h1 data-aos="fade-right" data-aos-duration="500">Нужен красивый или уникальный сайт?</h1>
                    <h2 data-aos="fade-left" data-aos-duration="500">Обратитесь к нам, чтобы получить консультацию</h2>
                </div>
        </div>
	<style jsx>{`
.another {
    width: 100%;
    height: auto;
    text-align: center; 
    padding-top: 130px;
    padding-bottom: 50px;
    position: relative;
    background-image: url(/images/banner-bg.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
}

.another .gradient {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background: -moz-linear-gradient(left, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.5) 100%);
    background: -webkit-linear-gradient(left, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.5) 100%);
    background: linear-gradient(to right, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.5) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#80ffffff', endColorstr='#80ffffff', GradientType=1);
}

.another h2 {
    color: #000000;
    font-size: 22px;
    font-weight: 500;
}

.another h1 {
    color: #1257e3;
    font-size: 44px;
    padding-bottom: 10px;
    text-transform: capitalize;
    font-weight: 400;
}
    `}</style>
    </div>
  )
}