import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from '../common/Loader'
import Languages from '../components/Languages'
import NoDataFound from '../common/NoDataFound'

const apiConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

const Repository = ({ username }) => {
  const [repos, setRepos] = useState([])
  const [apiStatus, setApiStatus] = useState(apiConstants.initial)

 useEffect(() => {
  if (!username) return
  const fetchData = async () => {
    await fetchGitRepos()
  }
  fetchData()
}, [username])


  const fetchGitRepos = async () => {
    setApiStatus(apiConstants.inProgress)

    try {
      const response = await fetch(`https://apis2.ccbp.in/gpv/repos/${username}?api_key=${import.meta.env.VITE_GITHUB_API_KEY}`)
      if (!response.ok) {
        setApiStatus(apiConstants.failure)
        return
      }

      const data = await response.json()
      const updatedData = data.map(repo => ({
        name: repo.name,
        description: repo.description,
        id: repo.id,
        forks: repo.forks,
        forksCount: repo.forks_count,
        forksUrl: repo.forks_url,
        stargazersCount: repo.stargazers_count,
        stargazersUrl: repo.stargazers_url,
        languages: repo.languages.map(lang => ({
          name: lang.name,
          value: lang.value,
          id: lang.value,
        })),
      }))
      setRepos(updatedData)
      setApiStatus(apiConstants.success)
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setApiStatus(apiConstants.failure)
    }
  }

  const renderNoDataFound = () => (
    <>
      <NoDataFound/>
    </>
   
  )

  const renderSuccessView = () => (
    <div>
      <h1 className="text-white text-2xl md:text-3xl font-bold ml-[10%] pt-5">Repositories</h1>
      <ul className="flex flex-col items-center mt-6">
        {repos.map(repo => (
          <Link
            key={repo.id}
            to={`/repositories/${repo.name}`}
            className="no-underline w-full flex justify-center"
          >
            <li className="bg-white/5 w-[90%] md:w-[80%] rounded-lg p-4 mb-6">
              <h2 className="text-blue-500 text-xl font-semibold">{repo.name}</h2>
              <p className="text-white text-sm mt-2">{repo.description}</p>
              <div className="flex flex-wrap mt-3 gap-2">
                {repo.languages.map(language => (
                  <Languages key={language.id} languageDetails={language} />
                ))}
              </div>

               <div className="flex gap-6 mb-4 mt-4">
          <div className="flex items-center gap-2">
            <img src="https://res.cloudinary.com/diqwk5cdp/image/upload/v1731339192/Star_-_16px.1_zgg6a9.png" alt="star" />
            <span className="text-white">{repo.stargazersCount}</span>
          </div>
          <div className="flex items-center gap-2">
            <img src="https://res.cloudinary.com/diqwk5cdp/image/upload/v1731339192/Git_3_gqyitj.png" alt="fork" />
            <span className="text-white">{repo.forksCount}</span>
          </div>
        </div>
            </li>

           
          </Link>
        ))}
      </ul>
    </div>
  )

  const renderFailureView = () => (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col items-center">
        <img
          src="https://res.cloudinary.com/diqwk5cdp/image/upload/v1730787654/Frame_8830_uvuzht.png"
          alt="failure view"
          className="w-48"
        />
        <p className="text-white text-lg mt-4">Something went wrong. Please try again</p>
        <button
          onClick={fetchGitRepos}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Try again
        </button>
      </div>
    </div>
  )

  const renderLoadingView = () => (
    <div className="flex justify-center items-center h-screen">
      <Loader type="TailSpin" color="#3B82F6" height={50} width={50} />
    </div>
  )

  const renderRepositoryView = () => {
    switch (apiStatus) {
      case apiConstants.success:
        return renderSuccessView()
      case apiConstants.failure:
        return renderFailureView()
      case apiConstants.inProgress:
        return renderLoadingView()
      default:
        return null
    }
  }

  if (!username) return renderNoDataFound()

  return (
    <div className="w-full bg-slate-900 min-h-screen" data-testid="repository">
      {renderRepositoryView()}
    </div>
  )
}

export default Repository
