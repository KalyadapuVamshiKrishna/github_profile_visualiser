import {Component} from 'react'
import Loader from '../common/Loader'
import Languages from '../components/Languages'
import Contributors from '../components/Contributors'
import PieChart from '../charts/PieChart'


const apiConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class RepoItemDetails extends Component {
  state = {
    apiStatus: apiConstants.initial,
    repoItemDetailsList: {},
  }

  componentDidMount() {
    this.getRepoDetails()
  }

  getRepoDetails = async () => {
    this.setState({apiStatus: apiConstants.inProgress})
    const {username, repoName} = this.props
    const url = `https://apis2.ccbp.in/gpv/specific-repo/${username}/${repoName}?api_key=${import.meta.env.VITE_GITHUB_API_KEY}`
    const options = {method: 'GET'}

    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = {
        name: data.name,
        description: data.description,
        languages: data.lanuages,
        stargazersCount: data.stargazers_count,
        forksCount: data.forks_count,
        commitsCount: data.network_count,
        issuesCount: data.open_issues_count,
        contributors: data.contributors.map(c => ({
          avatarUrl: c.avatar_url,
          contributions: c.contributions,
          login: c.login,
          id: c.id,
          htmlUrl: c.html_url,
        })),
        owner: {
          login: data.owner.login,
          avatarUrl: data.owner.avatar_url,
          htmlUrl: data.owner.html_url,
        },
        watchersCount: data.watchers_count,
      }
      this.setState({
        apiStatus: apiConstants.success,
        repoItemDetailsList: updatedData,
      })
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  onClickTryAgain = () => this.getRepoDetails()

  renderRepoItemDetailsViews = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstants.success:
        return this.renderSuccessView()
      case apiConstants.failure:
        return this.renderFailureView()
      case apiConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  renderSuccessView = () => {
    const {repoItemDetailsList} = this.state
    const {
      name,
      description,
      languages,
      forksCount,
      stargazersCount,
      watchersCount,
      issuesCount,
      contributors,
    } = repoItemDetailsList

    return (
      <div className="bg-white/5 p-6 rounded-lg my-6 text-white">
        <h1 className="text-blue-500 text-2xl font-bold mb-2">{name}</h1>
        <p className="text-slate-300 mb-4">{description}</p>

        <ul className="flex flex-wrap gap-2 mb-4">
          {languages.map(lang => (
            <Languages key={lang.value} languageDetails={lang} />
          ))}
        </ul>

        <div className="flex gap-6 mb-4">
          <div className="flex items-center gap-2">
            <img src="https://res.cloudinary.com/diqwk5cdp/image/upload/v1731339192/Star_-_16px.1_zgg6a9.png" alt="star" />
            <span>{stargazersCount}</span>
          </div>
          <div className="flex items-center gap-2">
            <img src="https://res.cloudinary.com/diqwk5cdp/image/upload/v1731339192/Git_3_gqyitj.png" alt="fork" />
            <span>{forksCount}</span>
          </div>
        </div>

        <div className="flex gap-6 mb-6">
          <div className="border border-slate-400 rounded px-4 py-2 text-center">
            <p className="text-xs">Watchers Count</p>
            <p>{watchersCount}</p>
          </div>
          <div className="border border-slate-400 rounded px-4 py-2 text-center">
            <p className="text-xs">Issues Count</p>
            <p>{issuesCount}</p>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-bold">Contributors :</h2>
          <p className="text-slate-400 text-sm mb-4">
            {contributors.length} {contributors.length === 1 ? 'Member' : 'Members'}
          </p>
          <div className="w-fit grid md:grid-cols-6 lg:grid-cols-6 gap-4">
            {contributors.slice(0,5).map(each => (
              <Contributors key={each.id} contributorDetails={each} />
            ))}

            {contributors.length > 4 && (
               <div className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-400 text-sm text-gray-600">
        +{contributors.length - 5}
      </div>
            )}
          </div>
        </div>

        <h2 className="text-xl font-bold mb-2">Languages :</h2>
        <div className="w-full max-w-2xl">
          <PieChart languages={languages} />
        </div>
      </div>
    )
  }

  renderFailureView = () => (
    <div className="flex flex-col items-center justify-center text-white py-20">
      <img
        src="https://res.cloudinary.com/diqwk5cdp/image/upload/v1730787654/Frame_8830_uvuzht.png"
        alt="failure view"
        className="w-80 mb-4"
      />
      <p className="text-lg mb-4">Something went wrong. Please try again.</p>
      <button
        type="button"
        className="bg-blue-600 px-6 py-2 rounded hover:bg-blue-700"
        onClick={this.onClickTryAgain}
      >
        Try Again
      </button>
    </div>
  )

  renderLoadingView = () => (
    <div className="flex justify-center items-center h-screen">
      <Loader type="TailSpin" color="#3B82F6" height={50} width={50} />
    </div>
  )

  render() {
    return (
      <div className="w-[80%] bg-slate-900 px-4">
        {this.renderRepoItemDetailsViews()}
      </div>
    )
  }
}

export default RepoItemDetails