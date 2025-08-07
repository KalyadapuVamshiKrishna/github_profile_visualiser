import { PieChart, Pie, Legend, Cell, ResponsiveContainer } from 'recharts'

const COLORS = [
  '#0088FE',
  '#00C49F',
  '#FFBB28',
  'Pink',
  '#F2637F',
  'Orange',
  'purple',
]

const LanguageRepoCountPie = ({ langRepoCount }) => {
  return (
    <>     <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            cx="50%"
            cy="50%"
            data={langRepoCount}
            startAngle={0}
            endAngle={360}
            innerRadius="40%"
            outerRadius="70%"
            dataKey="value"
            labelLine={false}
            label={({ name }) => name}
          >
            {langRepoCount.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
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

export default LanguageRepoCountPie
