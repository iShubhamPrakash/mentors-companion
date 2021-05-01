import React from "react";

export const Feedback = ({ data }) => {
	return (
		<div className="feedback" key={data.id}>
			<code>{data.submission_id}</code>
		</div>
	);
};
