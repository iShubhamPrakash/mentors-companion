import React, { useState } from "react";
import { Textarea, Button } from "@chakra-ui/react";
import { mergeTwoFeedbackDataArray } from "../Utils/mergeFeedbackData";
import { updateLocalStorage } from "../Utils/permanentStorage";
import { hasNewData } from "../Utils/hasNewData";

export const InputBox = (props) => {
	const { feedbackdata, setFeedbackdata } = props;

	const [value, setValue] = useState("");

	const handleAnalyse = () => {
		try {
			const newFeedBackData = JSON.parse(value);

			if (hasNewData(feedbackdata, newFeedBackData)) {
				const totalFeedbackData = mergeTwoFeedbackDataArray(
					feedbackdata,
					newFeedBackData
				);

				//update localStorage
				updateLocalStorage(totalFeedbackData);
				setFeedbackdata(totalFeedbackData);
			} else {
				alert(
					"No new data to append."
				)
			}
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
				placeholder="Use the above link to get you students' feedback in JSON format..."
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
			<Button onClick={handleAnalyse}>Analyze Feedback</Button>
		</div>
	);
};
