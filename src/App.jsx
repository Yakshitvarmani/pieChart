import React, { Fragment } from "react";
import { PieChart, Pie, Tooltip } from "recharts";

const App = () => {
  const data = [
    { company: "TYS", emp: 200 },
    { company: "BTM", emp: 800 },
    { company: "BTR", emp: 200 },
    { company: "BTM JSPIDER", emp: 200 },
  ];

  const info = data.map(e => e.company);
  console.log(info);
  return (
    <Fragment>
      <label> Enter First input</label>
      <input type="text" />
      <PieChart width={700} height={700}>
        <Pie data={data} dataKey="emp" fill="red" outerRadius={250} label />
        <Tooltip />
      </PieChart>
    </Fragment>
  );
};

export default App;
