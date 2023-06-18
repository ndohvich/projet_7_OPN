import Banner from '../../components/Banner'
import banner from '../../assets/images/banner-home.png'
import Card from '../../components/Card'
import accomodations from '../../datas/data.json'

export default function Home() {
  return (
    <>
      <Banner image={banner} title="Chez vous, partout et ailleurs" />
      <section className="card-container">
        {accomodations.map((apart) => (
          <Card key={apart.id} data={apart} />
        ))}
      </section>
    </>
  )
}