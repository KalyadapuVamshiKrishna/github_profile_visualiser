const colorClasses = [
  {
    text: 'text-pink-400',
    bg: 'bg-pink-700/20',
  },
  {
    text: 'text-green-400',
    bg: 'bg-green-600/20',
  },
  {
    text: 'text-sky-400',
    bg: 'bg-sky-700/20',
  },
  {
    text: 'text-pink-300',
    bg: 'bg-pink-800/20',
  },
  {
    text: 'text-yellow-400',
    bg: 'bg-yellow-600/20',
  },
]

const Languages = ({ languageDetails }) => {
  const { name } = languageDetails
  const color = colorClasses[Math.floor(Math.random() * colorClasses.length)]

  return (
    <div
      className={`flex items-center justify-center rounded-xl text-sm font-medium px-4 py-1 mr-2 mb-2 ${color.text} ${color.bg}`}
    >
      {name}
    </div>
  )
}

export default Languages
