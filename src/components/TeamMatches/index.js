import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {
    TeamImg: '',
    LatestMatchDetails: {},
    RecentMatches: [],
    isLoading: true,
  }

  componentDidMount() {
    this.renderTeamFromServer()
  }

  renderTeamFromServer = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const Repo = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const Data = await Repo.json()

    const reqData = {
      latestMatchDetails: Data.latest_match_details,
      recentMatches: Data.recent_matches,
      teamBannerUrl: Data.team_banner_url,
    }

    const {latestMatchDetails, recentMatches, teamBannerUrl} = reqData

    const UpdatedMatchDetails = {
      umpires: latestMatchDetails.umpires,
      result: latestMatchDetails.result,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      id: latestMatchDetails.id,
      date: latestMatchDetails.date,
      venue: latestMatchDetails.venue,
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      firstInnings: latestMatchDetails.first_innings,
      secondInnings: latestMatchDetails.second_innings,
      matchStatus: latestMatchDetails.match_status,
    }
    const updatedMatches = recentMatches.map(each => ({
      umpires: each.umpires,
      result: each.result,
      manOfTheMatch: each.man_of_the_match,
      id: each.id,
      date: each.date,
      venue: each.venue,
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      firstInnings: each.first_innings,
      secondInnings: each.second_innings,
      matchStatus: each.match_status,
    }))

    this.setState({
      TeamImg: teamBannerUrl,
      LatestMatchDetails: UpdatedMatchDetails,
      RecentMatches: updatedMatches,
      isLoading: false,
    })
  }

  renderTotalPage = () => {
    const {TeamImg, LatestMatchDetails, RecentMatches} = this.state

    return (
      <div className="details-container">
        <img src={TeamImg} alt="team banner" className="members" />
        <h1 className="heading">LatestMatches</h1>
        <LatestMatch MatchDetails={LatestMatchDetails} />
        <ul className="lists-container">
          {RecentMatches.map(each => (
            <MatchCard Card={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="black" height={50} />
          </div>
        ) : (
          <div className="team-Match-Container">{this.renderTotalPage()}</div>
        )}
      </div>
    )
  }
}

export default TeamMatches
