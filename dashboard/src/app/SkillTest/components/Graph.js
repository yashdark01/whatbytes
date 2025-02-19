"use client";

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const data = [
  { percentile: 0, students: 5 },
  { percentile: 10, students: 15 },
  { percentile: 20, students: 35 },
  { percentile: 30, students: 50 },
  { percentile: 40, students: 75 },
  { percentile: 50, students: 90 },
  { percentile: 60, students: 60 },
  { percentile: 70, students: 40 },
  { percentile: 80, students: 30 },
  { percentile: 90, students: 10 },
  { percentile: 100, students: 5 },
];

export default function ComparisonGraph() {
  const { percentile } = useSelector((state) => state.user);
  const [validPercentile, setValidPercentile] = useState(0);

  useEffect(() => {
    console.log("Re-render graph for percentile:", percentile);
    
    if (percentile >= 0 && percentile <= 100) {
      setValidPercentile(percentile);
    }
  }, [percentile]);

  return (
    <div className="relative z-0 bg-white p-6 gap-8 rounded-lg border border-gray-200">
      <h2 className="text-lg font-semibold mb-3">Comparison Graph</h2>
      <p className="text-sm text-gray-600 mb-3">
        <strong>You scored {percentile}% percentile</strong>, which is lower than the average percentile
        72% of all the engineers who took this assessment.
      </p>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="percentile" domain={[0, 100]} type="number" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="students" stroke="#8B5CF6" dot={{ r: 4 }} />
          <ReferenceLine x={validPercentile} stroke="gray" strokeWidth={1} label="Your Percentile" alwaysShow />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}