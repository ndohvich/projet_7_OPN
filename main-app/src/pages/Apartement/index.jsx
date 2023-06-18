import { useParams } from 'react-router-dom'
import accomodations from '../../datas/data.json'
import Error from '../../pages/Error'
import Carousel from '../../components/Carousel'
import Title from '../../components/Title'
import Host from '../../components/Host'
import Rate from '../../components/Rate'
import Collapse from '../../components/Collapse'
import '../../styles/apartment.css'

export default function Apartment() {
  const { id } = useParams()
  const getApartment = accomodations.find((apart) => {
    return apart.id === id
  })

  if (getApartment === undefined) {
    return <Error />
  }

  return (
    <>
      <Carousel pictures={getApartment.pictures}></Carousel>
      <div className="apart-div">
        <div className="apart-title-tag">
          <Title title={getApartment.title} location={getApartment.location} />
          <div className="tags">
            {getApartment.tags?.map((tag, index) => (
              <div className="tag-text" key={index}>
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div className="apart-rate-host">
          <Host host={getApartment.host} />
          <Rate rating={getApartment.rating} />
        </div>
      </div>
      <div className="apart-collapse">
        <ul>
          <li>
            <Collapse
              title="Description"
              description={getApartment.description}
            />
          </li>
          <li>
            <Collapse
              title="Équipements"
              description={getApartment.equipments?.map((item, index) => (
                <div key={index}>{item}</div>
              ))}
            />
          </li>
        </ul>
      </div>
    </>
  )
}