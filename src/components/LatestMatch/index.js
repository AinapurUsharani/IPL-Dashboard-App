import './index.css'

const LatestMatch = props => {
  const {MatchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = MatchDetails

  return (
    <div className="latest-match-container">
      <div className="container-1">
        <div className="name-place-container">
          <p className="heading">{competingTeam}</p>
          <p className="heading">{date}</p>
          <p className="para">{venue}</p>
          <p className="para">{result}</p>
        </div>
        <div className="logo-container">
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="logo"
          />
        </div>
      </div>
      <hr className="line" />
      <div className="container-control">
        <h1 className="innings-heading">First Innings</h1>
        <p className="innings-paragraph">{firstInnings}</p>
        <h1 className="innings-heading">Second Innings</h1>
        <p className="innings-paragraph">{secondInnings}</p>
        <h1 className="innings-heading">Man Of The Match</h1>
        <p className="innings-paragraph">{manOfTheMatch}</p>
        <h1 className="innings-heading">Umpires</h1>
        <p className="innings-paragraph">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
