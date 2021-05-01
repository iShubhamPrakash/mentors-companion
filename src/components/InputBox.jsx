import React, { useState } from "react";
import { Textarea, Button } from "@chakra-ui/react";

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
			<Textarea
				placeholder="Enter JSON data obtained from https://review-api.udacity.com/api/v1/me/student_feedbacks"
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
			<Button onClick={handleAnalyse}>Analyse Feedback</Button>
		</div>
	);
};
