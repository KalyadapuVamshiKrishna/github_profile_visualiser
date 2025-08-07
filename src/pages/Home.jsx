import { useEffect, useState, useContext } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import Loader from '../common/Loader';

import ProfileContext from '../context/ProfileContext';
import UserProfile from '../components/UserProfile';

const API_STATUS = {
  IDLE: 'IDLE',
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
  INVALID: 'INVALID',
};

const Home = () => {
  const { username, changeProfileName } = useContext(ProfileContext);
  const [userData, setUserData] = useState(null);
  const [apiStatus, setApiStatus] = useState(API_STATUS.IDLE);

  useEffect(() => {
    if (apiStatus === API_STATUS.LOADING && username) {
      fetchUserDetails();
    }
  }, [apiStatus, username]);

  const fetchUserDetails = async () => {
    try {
      const response = await fetch(
        `https://apis2.ccbp.in/gpv/profile-details/${username}?api_key=${import.meta.env.VITE_GITHUB_API_KEY}`
      );

      if (!response.ok) {
        setApiStatus(
          response.status === 400 ? API_STATUS.INVALID : API_STATUS.ERROR
        );
        return;
      }

      const data = await response.json();
      const transformed = transformUserData(data);

      setUserData(transformed);
      setApiStatus(API_STATUS.SUCCESS);
    } catch {
      setApiStatus(API_STATUS.ERROR);
    }
  };

  const transformUserData = (data) => ({
    avatarUrl: data.avatar_url,
    name: data.login,
    bio: data.bio,
    blog:data.blog,
    company: data.company,
    created_at:data.created_at,
    email:data.email,
    events_url:data.events_url,
    location: data.location,
    twitterUsername: data.twitter_username,
    publicRepos: data.public_repos,
    followers: data.followers,
    following: data.following,
    organizationsUrl: data.organizations_url,

  });

  const handleSearch = () => {
    if (!username.trim()) return;
    setApiStatus(API_STATUS.LOADING);
  };

  const renderContent = () => {
    switch (apiStatus) {
      case API_STATUS.LOADING:
        return <Loading />;
      case API_STATUS.SUCCESS:
        return <UserProfile data={userData} />;
      case API_STATUS.ERROR:
      case API_STATUS.INVALID:
        return <ErrorView onRetry={handleSearch} />;
      case API_STATUS.IDLE:
      default:
        return <InitialView />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 p-4" data-testid="home">
      

      <SearchBar
        username={username}
        onInputChange={changeProfileName}
        onSearch={handleSearch}
      />

      {renderContent()}
    </div>
  );
};

const SearchBar = ({ username, onInputChange, onSearch }) => (
  <div className="flex justify-center items-center mt-8 gap-2">
    <input
      type="search"
      value={username}
      placeholder="Enter GitHub username"
      className="w-full max-w-md px-6 py-3 bg-slate-800 text-slate-300 text-lg rounded-l-md outline-none border-none focus:ring-2 focus:ring-blue-500"
      onChange={(e) => onInputChange(e.target.value)}
    />
    <div
      className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-3 rounded-r-md cursor-pointer"
      data-testid="searchButton"
      onClick={onSearch}
    >
      <HiOutlineSearch className="w-6 h-7" />
    </div>
  </div>
);

const Loading = () => (
  <div className="flex justify-center items-center mt-10" data-testid="loader">
    <Loader type="TailSpin" color="#3B82F6" height={50} width={50} />
  </div>
);

const ErrorView = ({ onRetry }) => (
  <div className="text-center mt-10">
    <h2 className="text-2xl font-bold mb-4 text-white">GitHub Profile Visualizer</h2>
    <img
      src="https://res.cloudinary.com/diqwk5cdp/image/upload/v1725551907/Frame_8830_hdd3sz.png"
      alt="error"
      className="mx-auto w-60 mb-4"
    />
    <p className="text-gray-400 mb-4">Something went wrong. Please try again.</p>
    <button
      type="button"
      className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded"
      onClick={onRetry}
    >
      Try Again
    </button>
  </div>
);

const InitialView = () => (
  <div className="text-center mt-10">
    <h1 className="text-3xl font-bold mb-4 text-white">GitHub Profile Visualizer</h1>
    <img
      src="https://res.cloudinary.com/diqwk5cdp/image/upload/v1725521736/Group_2_hzliq1.png"
      alt="initial view"
      className="mx-auto w-80"
    />
  </div>
);

export default Home;
