import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import ProfileContext from '../context/ProfileContext'
import RepoItemDetails from '../components/RepoItemDetails'

const RepoItemDetailsContainer = () => {
  const { repoName } = useParams()
  const { username } = useContext(ProfileContext)

  return (
    <div className="min-h-screen w-full bg-slate-900 text-white flex justify-center items-start  px-4py-8">
      <RepoItemDetails username={username} repoName={repoName} />
    </div>
  )
}

export default RepoItemDetailsContainer
