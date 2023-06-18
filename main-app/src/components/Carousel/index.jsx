import { useState } from 'react'
import vectorRight from '../../assets/images/vector-right.svg'
import vectorLeft from '../../assets/images/vector-left.svg'
import '../../styles/carousel.css'

export default function Carousel({ pictures }) {
  const [slide, setSlide] = useState(0)

  const previousSlide = () => {
    setSlide(slide === 0 ? pictures.length - 1 : slide - 1)
  }

  const nextSlide = () => {
    setSlide(slide === pictures.length - 1 ? 0 : slide + 1)
  }

  return (
    <div className="carousel">
      {pictures?.length > 1 && (
        <img
          className="vector-left vector"
          src={vectorLeft}
          alt="Gauche"
          onClick={previousSlide}
        />
      )}
      {pictures?.map((picture, index) => {
        return (
          <img
            key={index}
            className={index === slide ? 'carousel-img actif' : 'carousel-img'}
            src={picture}
            alt="Propriété"
          />
        )
      })}

      {pictures?.length > 1 && (
        <img
          className="vector-right vector"
          src={vectorRight}
          alt="Droite"
          onClick={nextSlide}
        />
      )}
      {pictures?.length > 1 && (
        <span className="carousel-count">
          {slide + 1} / {pictures.length}
        </span>
      )}
    </div>
  )
}