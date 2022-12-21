import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {cardDetails} = props
  const {id, name, teamImageUrl} = cardDetails

  return (
    <Link to={`/team-matches/${id}`} className="container">
      <div>
        <li className="list-container">
          <img src={teamImageUrl} alt={name} className="image" />
          <div className="heading-container">
            <p className="name-heading">{name}</p>
          </div>
        </li>
      </div>
    </Link>
  )
}

export default TeamCard
