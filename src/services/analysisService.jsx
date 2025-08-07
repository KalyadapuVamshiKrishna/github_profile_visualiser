export const getProfileAnalysis = async username => {
  const response = await fetch(
    // eslint-disable-next-line no-undef
    `https://apis2.ccbp.in/gpv/profile-summary/${username}?api_key=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`
  )
  if (!response.ok) throw new Error('Failed to fetch')
  return await response.json()
}

export const formatQuarterCommits = obj =>
  Object.entries(obj).map(([name, commits]) => ({name, commits}))

export const formatLangData = obj =>
  Object.entries(obj).map(([name, value]) => ({name, value}))
