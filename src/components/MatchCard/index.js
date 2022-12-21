import './index.css'

const MatchCard = props => {
  const {Card} = props

  const {competingTeamLogo, competingTeam, result, matchStatus} = Card

  const req = matchStatus === 'Lost' ? 'paragraph1' : 'paragraph2'

  return (
    <li className="Each-container">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="logo1"
      />
      <p className="heading">{competingTeam}</p>
      <p className="paragraph">{result}</p>
      <p className={req}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
