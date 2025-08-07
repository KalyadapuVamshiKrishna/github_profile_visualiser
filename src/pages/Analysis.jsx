import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  getProfileAnalysis,
  formatQuarterCommits,
  formatLangData,
} from '../services/analysisService'

import Loader from '../common/Loader'
import ErrorView from '../common/ErrorView'
import NoDataFound from '../common/NoDataFound'
import LinearChart from '../charts/LinearChart'

// ✅ Corrected imports
import LanguageRepoCountPie from '../charts/LangRepoCountPie'
import LanguageCommitCountPie from '../charts/LangCommitCountPie'
import RepoCommitCountPie from '../charts/RepoCommitCountPie'


const Analysis = ({ username }) => {
  const [status, setStatus] = useState('INITIAL')
  const [data, setData] = useState({})

  useEffect(() => {
    if (!username) return

    const fetchData = async () => {
      setStatus('LOADING')
      try {
        const response = await getProfileAnalysis(username)
        setData(response)
        setStatus('SUCCESS')
      // eslint-disable-next-line no-unused-vars
      } catch (error) {
        setStatus('FAILURE')
      }
    }

    fetchData()
  }, [username])

  if (!username) return <NoDataFound />

  if (status === 'LOADING') return <Loader />

  if (status === 'FAILURE') {
    return <ErrorView retryFn={() => window.location.reload()} />
  }

  if (Object.keys(data).length === 0) {
    return <NoDataFound message="No Analysis Data Found!" />
  }

  // Destructure the actual data
  const { quarterCommitCount, langRepoCount, langCommitCount, repoCommitCount } = data

  return (
    <div className="analysis-container flex flex-col item-center gap-10">
  <h1 className="analysis-main-heading text-3xl font-bold text-white flex flex-row justify-center">Analysis</h1>

  {/* Line Chart */}
  <div className="w-[100%] h-[100%] flex flex-row justify-center">
    <LinearChart quarterCommitCount={formatQuarterCommits(quarterCommitCount)} />
  </div>

  {/* Pie Charts (2 side-by-side) */}
  <div className="language-piechart-container grid grid-cols-1 md:grid-cols-2 gap-6 w-[90%]">
    <div className="lang-per-repo-container p-4 rounded shadow text-center">
      <h2 className="text-3xl font-bold mb-2 text-white">Language Per Repos</h2>
      <LanguageRepoCountPie langRepoCount={formatLangData(langRepoCount)} />
    </div>

    <div className="lang-per-commit-container p-4 rounded shadow text-center">
      <h2 className="text-3xl font-bold mb-2 text-white">Language Per Commits</h2>
      <LanguageCommitCountPie langCommitCount={formatLangData(langCommitCount)} />
    </div>
  </div>

  
  <div className="repoCommitDescContainer w-[70%] p-5 rounded shadow text-center ">
    <h2 className="text-3xl font-bold mb-2 text-white">Commits per Repo (Top 10)</h2>
    <RepoCommitCountPie repoCommitCount={formatLangData(repoCommitCount).slice(0, 10)} />
  </div>
</div>

  )
}

export default Analysis
