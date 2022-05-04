import Link from 'next/link'
import Image from 'next/image'

export default function Work({ work }) {
  return (
	<div className="col-md-6 portfolio-col" data-aos="fade-up" data-aos-duration="500">
	<figure className="figure">
		<div className="portf-image"><Image className="figure-img" src={work.image} alt={work.title} width={620} height={465} /></div>
		<figcaption className="figure-caption">
			<h5>Website for <span><Link href={work.url} >{work.title}</Link></span></h5>
			<h6>Designed on {work.date}</h6>
			<div className="portf-type">{work.type}</div>
			<p>{work.text}</p>
		</figcaption>
	</figure>
<style jsx>{`

.portfolio-col h5 {
    font-size: 22px;
    font-weight: 400;
    padding-bottom: 14px;
}

.portfolio-col h6 {
    font-size: 18px;
    font-weight: 300;
    padding-bottom: 30px;
}

.portfolio-col p {
    font-size: 14px;
    color: #a3a3a3;
    font-weight: 500;
}

.portfolio-col h5 span a {
    color: #1553de;
    font-weight: 500;
    border-bottom: 2px solid #1553de;
}

.portfolio-col .figure .figure-img {
    width: 100%;
    object-fit: cover;
}
.portfolio-col .portf-image {
	box-shadow: 0px 0px 5px 3px #ddd;
    margin-bottom: 37px;
}
.portfolio-col .portf-type {

}

.portfolio-col .figure {
    margin: 0 0 2.5rem;
}
      `}</style>

    </div>
	)
}