import { createContext, useState } from 'react';

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [username, setUsername] = useState('');
  const [repo, setRepo] = useState('');

  const changeProfileName = (name) => setUsername(name);
  const changeRepoName = (name) => setRepo(name);

  return (
    <ProfileContext.Provider
      value={{
        username,
        repo,
        changeProfileName,
        changeRepoName,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileContext;
