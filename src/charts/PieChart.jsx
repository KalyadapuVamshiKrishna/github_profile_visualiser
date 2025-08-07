import { PieChart, Pie, ResponsiveContainer, Cell, Legend } from 'recharts';

const COLORS = [
  '#0088FE', '#00C49F', '#FFBB28', 'purple', 'pink', 'orange', 'red'
];

const Piechart = ({ languages = [] }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={languages}
          cx="50%"
          cy="50%"
          startAngle={0}
          endAngle={360}
          innerRadius="40%"
          outerRadius="70%"
          dataKey="value"
        >
          {languages.map((entry, index) => (
            <Cell
              key={`cell-${entry.name}-${entry.value}`}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>
        <Legend
          iconType="square"
          layout="vertical"
          verticalAlign="middle"
          align="right"
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default Piechart;
