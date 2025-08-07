import { useContext } from 'react'
import ProfileContext from '../context/ProfileContext'
import Repository from '../pages/Repository'

const RepositoryContainer = () => {
  const { username } = useContext(ProfileContext)
  console.log('RepositoryContainer - username:', username)

  return (
    <div className="w-full">
      <Repository username={username} />
    </div>
  )
}

export default RepositoryContainer
