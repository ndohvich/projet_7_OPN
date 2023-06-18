import { Link } from 'react-router-dom'
import '../../styles/error.css'

export default function Error() {
  return (
    <div className="error">
      <h1 className="error-404">404</h1>
      <span className="error-description">
        Oups! La page que vous demandez n'existe pas.
      </span>
      <Link to="/" className="error-return">
        Retourner sur la page d’accueil
      </Link>
    </div>
  )
}