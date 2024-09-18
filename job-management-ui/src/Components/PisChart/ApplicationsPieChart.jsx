import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import './ApplicationsPieChart.scss';

const ApplicationsPieChart = ({ totalApplications, notRreviewedApplications }) => {
  const data = [
    { name: 'Total Applicants', value: totalApplications },
    { name: 'Not Reviewed', value: notRreviewedApplications }
  ];

  const COLORS = ['#ddd', '#a25af7'];

  return (
    <PieChart className='pie-chart' width={300} height={300}>
      <Pie
        data={data}
        cx={150}
        cy={150}
        innerRadius={60}
        outerRadius={100}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell className='pie-cell' key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default ApplicationsPieChart;
