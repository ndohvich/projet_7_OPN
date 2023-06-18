import '../../styles/title.css'

export default function Title({ title, location }) {
  return (
    <>
      <h1 className="title-apart">{title}</h1>
      <h3 className="location">{location}</h3>
    </>
  )
}