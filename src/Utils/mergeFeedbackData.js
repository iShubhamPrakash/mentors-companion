export const mergeTwoFeedbackDataArray = (prevData, newData) => {
	try {
		// No need to merge in previData empty
		if (prevData.length === 0) return newData;

		const latestReviewIdFromPrevData = prevData[0].id;

		const newFeedbackData = [];

		for (let i = 0; i < newData.length; i++) {
			if (newData[i].id === latestReviewIdFromPrevData) {
				break;
			} else {
				newFeedbackData.push(newData[i]);
			}
		}

		// Return the complete data
		return [...newFeedbackData, ...prevData];
	} catch (e) {
		console.log("error merging two feedback data", e);
		return newData;
	}
};
