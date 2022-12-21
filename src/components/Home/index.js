import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {TeamsDetails: [], isLoading: true}

  componentDidMount() {
    this.getDetailsFromServer()
  }

  getDetailsFromServer = async () => {
    const Team = await fetch('https://apis.ccbp.in/ipl')
    const data = await Team.json()

    const {teams} = data
    const ReqDetails = teams.map(each => ({
      name: each.name,
      id: each.id,
      teamImageUrl: each.team_image_url,
    }))

    this.setState({TeamsDetails: ReqDetails, isLoading: false})
  }

  getTheDetails = () => {
    const {TeamsDetails} = this.state

    return (
      <div className="app-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="iplLogo"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>
        <div className="teams-container">
          {TeamsDetails.map(eachCard => (
            <TeamCard cardDetails={eachCard} key={eachCard.id} />
          ))}
        </div>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <Link to="/" className="list-style">
        <div>
          {isLoading ? (
            <div testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} />
            </div>
          ) : (
            this.getTheDetails()
          )}
        </div>
      </Link>
    )
  }
}

export default Home
