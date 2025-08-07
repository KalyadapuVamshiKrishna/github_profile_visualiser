import { PieChart, Pie, Legend, Cell, ResponsiveContainer } from 'recharts'

const COLORS = [
  'Pink',
  '#00C49F',
  '#FFBB28',
  '#0088FE',
  '#F2637F',
  'Orange',
  'purple',
]

const RepoCommitCountPie = ({ repoCommitCount }) => {
  return (
   <div className="flex flex-row justify-center items-center">
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            cx="50%"
            cy="50%"
            data={repoCommitCount}
            startAngle={0}
            endAngle={360}
            innerRadius="50%"
            outerRadius="80%"
            dataKey="value"
            labelLine={false}
            label={({ name }) => name}
          >
            {repoCommitCount.map((entry, index) => (
              <Cell
                key={`repo-${index}`}
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
    </div>
  )
}

export default RepoCommitCountPie
