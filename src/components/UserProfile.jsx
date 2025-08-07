

const UserProfile = ({ data }) => {
  const {
    avatarUrl,
    name,
    bio,
    company,
    location,
    twitterUsername,
    publicRepos,
    followers,
    following,
    organizationsUrl,
  } = data;

  return (
    <div className="max-w-4xl mx-auto mt-8 bg-white dark:bg-gray-900 shadow-xl rounded-2xl p-6 transition-all duration-300">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <img
          src={avatarUrl}
          alt={name}
          className="w-32 h-32 rounded-full shadow-md border-4 border-blue-500"
        />
        <div className="text-center md:text-left space-y-2">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{name}</h2>
          {bio && <p className="text-gray-600 dark:text-gray-300">{bio}</p>}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm mt-2">
            {company && (
              <span className="bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded-full text-gray-700 dark:text-gray-300">
                🏢 {company}
              </span>
            )}
            {location && (
              <span className="bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded-full text-gray-700 dark:text-gray-300">
                📍 {location}
              </span>
            )}
            {twitterUsername && (
              <a
                href={`https://twitter.com/${twitterUsername}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300 px-3 py-1 rounded-full hover:underline"
              >
                🐦 @{twitterUsername}
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        <Stat label="Public Repos" value={publicRepos} />
        <Stat label="Followers" value={followers} />
        <Stat label="Following" value={following} />
      </div>

      {organizationsUrl && (
        <div className="mt-6 text-center">
          <a
            href={organizationsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 underline"
          >
            View Organizations
          </a>
        </div>
      )}
    </div>
  );
};

const Stat = ({ label, value }) => (
  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md">
    <p className="text-xl font-semibold text-gray-900 dark:text-white">{value}</p>
    <p className="text-gray-600 dark:text-gray-400">{label}</p>
  </div>
);

export default UserProfile;
