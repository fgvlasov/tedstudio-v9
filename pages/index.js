import Work from '../components/Work'
import useSWR from 'swr'
import { useRouter } from 'next/router'
import { en } from '../locales/en'
import { ru } from '../locales/ru'

export default function Home() {
  const fetcher = (url) => fetch(url).then((res) => res.json())

  const { data, error } = useSWR('/api/works', fetcher)
  
  const router = useRouter()
  const t = router.locale === 'ru' ? ru : en

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>
    return (
    <div className="portfolio">
        <div className="container">
            <div className="row portfolio-row">
                <div className="col-md-12 portfolio-col">
                    <h3>{t.portfolio}</h3>
                </div>
				{data.map((p, i) => {
				  return (
					<Work key={i} work={p} />
				  )
			 	 }
				)}
				
                
            </div>
        </div>
<style jsx>{`
.portfolio {
    width: 100%;
    height: auto;
    padding-top: 70px;
    padding-bottom: 120px;
}

.portfolio .portfolio-row {
    margin-left: -30px;
    margin-right: -30px;
}

.portfolio .portfolio-col {
    padding-left: 30px;
    padding-right: 30px;
}

.portfolio h3 {
    color: #ad3284;
    font-size: 32px;
    font-weight: 400;
    padding-bottom: 40px;
    text-transform: uppercase;
}

      `}</style>
	</div>


  )
}
