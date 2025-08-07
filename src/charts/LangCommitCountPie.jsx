import { PieChart, Pie, Legend, Cell, ResponsiveContainer } from 'recharts'

const COLORS = [
  'Orange',
  'Pink',
  '#F2637F',
  '#0088FE',
  'yellow',
  '#00C49F',
  'purple',
]

const LanguageCommitCountPie = ({ langCommitCount }) => {
  return (
  <>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            cx="50%"
            cy="50%"
            data={langCommitCount}
            startAngle={0}
            endAngle={360}
            innerRadius="40%"
            outerRadius="70%"
            dataKey="value"
            labelLine={false}
            label={({ name }) => name}
          >
            {langCommitCount.map((entry, index) => (
              <Cell
                key={`commit-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend
            iconType="circle"
            layout="vertical"
            verticalAlign="middle"
            align="right"
            wrapperStyle={{
              color: '#fff',
              fontSize: '0.9rem',
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </>
  )
}

export default LanguageCommitCountPie
