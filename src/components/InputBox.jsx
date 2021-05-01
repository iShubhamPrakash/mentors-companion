import React, { useState } from "react";

export const InputBox = ({ setFeedbackdata }) => {
	const [value, setValue] = useState("");

	const handleAnalyse = async () => {
		try {
			const jsonToObject = await JSON.parse(value);

			console.log(jsonToObject);
			setFeedbackdata(jsonToObject);
		} catch (e) {
			console.log(e);
			alert(
				"Please make sure you paste correct JSON data obtained from \nhttps://review-api.udacity.com/api/v1/me/student_feedbacks"
			);
		}
	};

	return (
		<div className="inputBox">
			<textarea value={value} onChange={(e) => setValue(e.target.value)} />
			<button onClick={handleAnalyse}>Analyse</button>
		</div>
	);
};
