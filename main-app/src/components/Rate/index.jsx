import emptyStar from '../../assets/images/empty-star.svg'
import fullStar from '../../assets/images/star-rate.svg'
import '../../styles/rate.css'

export default function Rate({ rating }) {
  const NumberOfStars = [1, 2, 3, 4, 5]
  return (
    <div className="rate">
      {NumberOfStars.map((stars) =>
        rating >= stars ? (
          <img
            key={stars.toString()}
            className="full-star"
            src={fullStar}
            alt="Étoile remplie"
          />
        ) : (
          <img
            key={stars.toString()}
            className="empty-star"
            src={emptyStar}
            alt="Étoile vide"
          />
        )
      )}
    </div>
  )
}