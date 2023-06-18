import '../../styles/banner.css'

export default function Banner({ image, title }) {
  return (
    <div className="banner-container">
      <img className="banner-img" src={image} alt="Banner" />
      <h1 className="banner-title">{title}</h1>
    </div>
  )
}