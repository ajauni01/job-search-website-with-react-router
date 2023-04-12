import React from 'react';
import './Statistics.css'
import { PieChart, Pie, Legend, Tooltip } from "recharts";

const Statistics = () => {
  const assignmentMarks = [
    { name: "Assignment01", value: 57 },
    { name: "Assignment02", value: 54 },
    { name: "Assignment03", value: 46 },
    { name: "Assignment04", value: 57 },
    { name: "Assignment05", value: 57 },
    { name: "Assignment06", value: 53 },
    { name: "Assignment07", value: 60 },
    { name: "Assignment08", value: 58 },

  ];
  return (
    <div className='pie-chart'>
      <PieChart width={1500} height={500}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={assignmentMarks}
          cx={200}
          cy={200}
          outerRadius={80}
          fill="#8884d8"
          label
        />
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default Statistics;