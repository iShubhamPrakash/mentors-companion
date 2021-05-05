import { useEffect, useState } from "react";
import { Feedback } from "./Feedback";
import { InputBox } from "./InputBox";

import { Grid, GridItem, Heading, Link } from "@chakra-ui/react";
import DataPieChart from "./DataPieChart";
import { ExternalLinkIcon } from "@chakra-ui/icons";

import { defaultData } from "../default_data.js";
import { Disclaimer } from "./Disclaimer";
import { retriveLocalStorage } from "../Utils/permanentStorage";
import { RatingStats } from "./RatingStats";

const defaultChartData = [
	{ name: "Rating 5", value: 0 },
	{ name: "Rating 3", value: 0 },
	{ name: "Rating 1", value: 0 },
];

function App() {
	const [feedbackdata, setFeedbackdata] = useState([]);
	const [ratingData, setRatingData] = useState(defaultChartData);

	useEffect(() => {
		// Get previously saved data from the localStorage and display in the UI!!
		try {
			const data = retriveLocalStorage();
			setFeedbackdata(JSON.parse(data));
		} catch (e) {
			// No data found in localStorage -> display default data
			setFeedbackdata(defaultData);
		}
	}, []);

	useEffect(() => {
		let ratingDistribution = { 1: 0, 3: 0, 5: 0 };
		feedbackdata.forEach((data) => {
			data.responses.feedback.forEach((feedback) => {
				console.log(parseInt(feedback.rating));
				ratingDistribution[parseInt(feedback.rating)]++;
			});
		});

		console.log(ratingDistribution);
		setRatingData([
			{ name: "Rating 5", value: ratingDistribution[5] },
			{ name: "Rating 3", value: ratingDistribution[3] },
			{ name: "Rating 1", value: ratingDistribution[1] },
		]);
		return () => {
			setRatingData(defaultChartData);
		};
	}, [feedbackdata]);

	return (
		<div className="app">
			<Grid templateColumns="repeat(24, 1fr)" gap={0}>
				<GridItem colSpan={18}>
					<div className="leftContainer">
						<Heading pl={4} as="h3" size="md">
							Reviews History
						</Heading>
						<div className="feedback_container">
							{feedbackdata && feedbackdata.length ? (
								feedbackdata.map((data) => (
									<Feedback data={data} key={data.id} />
								))
							) : (
								<Disclaimer />
							)}
						</div>
					</div>
				</GridItem>
				<GridItem colSpan={6}>
					<div className="rightContainer">
						<Heading p={1} as="h3" size="sm" align="left">
							<Link
								href="https://review-api.udacity.com/api/v1/me/student_feedbacks"
								isExternal
							>
								Enter the JSON data obtained from here{" "}
								<ExternalLinkIcon mx="2px" />
							</Link>
						</Heading>
						<InputBox
							feedbackdata={feedbackdata}
							setFeedbackdata={setFeedbackdata}
						/>
						{/* <Heading p={1} as="h3" size="sm" align="left">
							Ratings distribution
						</Heading> */}
						<RatingStats totalRevies={feedbackdata.length} NPFS={0} />
						<DataPieChart feedbackdata={feedbackdata} ratingData={ratingData} />
					</div>
				</GridItem>
			</Grid>
		</div>
	);
}

export default App;
