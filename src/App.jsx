import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import Home from './pages/Home'
import NotFound from './pages/NotFound'
import AnalysisContainer from './components/AnalysisContainer'
import RepositoryContainer from './components/RepositoryContainer'
import RepoItemDetailsContainer from './components/RepoItemDetailsContainer'

import ProfileContext from './context/ProfileContext'
import MainLayout from './layouts/MainLayouts' 
import './App.css'

const App = () => {
  const [username, setUsername] = useState('')
  const [repoName, setRepoName] = useState('')

  const changeProfileName = (newUsername) => setUsername(newUsername)
  const changeRepoName = (newRepoName) => setRepoName(newRepoName)

  return (
    <ProfileContext.Provider
      value={{ username, changeProfileName, repoName, changeRepoName }}
    >
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/repositories"
          element={
            <MainLayout>
              <RepositoryContainer />
            </MainLayout>
          }
        />
        <Route
          path="/repositories/:repoName"
          element={
            <MainLayout>
              <RepoItemDetailsContainer />
            </MainLayout>
          }
        />
        <Route
          path="/analysis"
          element={
            <MainLayout>
              <AnalysisContainer />
            </MainLayout>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ProfileContext.Provider>
  )
}

export default App
