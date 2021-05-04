import React, { useState } from "react";
import { Textarea, Button } from "@chakra-ui/react";
import { mergeTwoFeedbackDataArray } from "../Utils/mergeFeedbackData";
import { updateLocalStorage } from "../Utils/permanentStorage";

export const InputBox = (props) => {
	const { feedbackdata, setFeedbackdata } = props;

	const [value, setValue] = useState("");

	const handleAnalyse = () => {
		try {
			const newFeedBackData = JSON.parse(value);

			const totalFeedbackData = mergeTwoFeedbackDataArray(
				feedbackdata,
				newFeedBackData
			);

			//update localStorage
			updateLocalStorage(totalFeedbackData);
			setFeedbackdata(totalFeedbackData);
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
