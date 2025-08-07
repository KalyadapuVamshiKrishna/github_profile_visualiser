const Contributors = ({ contributorDetails }) => {
  const { avatarUrl, login } = contributorDetails

  return (
    <>
      <img
        src={avatarUrl}
        alt={`${login || 'Contributor'} profile`}
        className="h-12 w-12 rounded-full object-cover border border-gray-300 shadow-md"
      />
    </>
  )
}

export default Contributors
