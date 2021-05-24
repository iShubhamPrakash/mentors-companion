/**
 * To check if there is any new data to merge or not
 * @param {*} prevData 
 * @param {*} newData 
 * @returns true if new rows are present in the newData, else false
 */
 export const hasNewData = (prevData, newData) => {
	try {
		// If there is no previous data, then we can easily merge
		if (prevData.length === 0) return true;

		const latestReviewIdFromPrevData = prevData[0].id;

		const latestReviewIdFromNewData = newData[0].id;
        
        return latestReviewIdFromPrevData !== latestReviewIdFromNewData;
	} catch (e) {
		console.log("error in comparing two sets of datasets", e);
		return false;
	}
};
