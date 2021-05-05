import React from "react";
import { PieChart, Pie, Tooltip, Cell } from "recharts";

const COLORS = ["#34ef9e", "#FFBB27", "#ff7768"];

export default function DataPieChart({ ratingData }) {
	return (
		<PieChart width={340} height={300}>
			<Pie
				dataKey="value"
				data={ratingData}
				cx={160}
				cy={150}
				innerRadius={60}
				outerRadius={120}
				fill="#82ca9d"
			>
				{ratingData.map((entry, index) => (
					<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
				))}
			</Pie>
			<Tooltip />
		</PieChart>
	);
}
