import Banner from '../../components/Banner'
import Collapse from '../../components/Collapse'
import banner from '../../assets/images/banner-about.png'
import aboutData from '../../datas/aboutData.json'

export default function About() {
  return (
    <>
      <Banner image={banner} />
      <main className="about">
        {aboutData.map((collapse) => (
          <Collapse
            key={collapse.id}
            title={collapse.title}
            description={collapse.description}
          />
        ))}
      </main>
    </>
  )
}