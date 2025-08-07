import { useContext } from 'react';
import ProfileContext from '../context/ProfileContext';
import Analysis from '../pages/Analysis';

const AnalysisContainer = () => {
  const { username } = useContext(ProfileContext);

  return (
    <div className="w-full px-4 md:px-12 py-8 bg-gray-900 min-h-screen">
      <h2 className="text-2xl font-semibold text-white mb-6">Analysis for {username}</h2>
      <Analysis username={username} />
    </div>
  );
};

export default AnalysisContainer;
