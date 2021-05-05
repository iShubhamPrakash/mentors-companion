import { useEffect, useState } from "react";
import { Feedback } from "./Feedback";
import { InputBox } from "./InputBox";

import { Grid, GridItem, Heading, Link } from "@chakra-ui/react";
import DataPieChart from "./DataPieChart";
import { ExternalLinkIcon } from "@chakra-ui/icons";

import { defaultData } from "../default_data.js";
import { Disclaimer } from "./Disclaimer";
import { retriveLocalStorage } from "../Utils/permanentStorage";

function App() {
	const [feedbackdata, setFeedbackdata] = useState([]);

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

	return (
		<div className="app">
			<Grid
				templateRows="repeat(1, 1fr)"
				templateColumns="repeat(7, 1fr)"
				gap={0}
			>
				<GridItem colSpan={5}>
					<Heading pl={4} as="h3" size="md">
						Reviews History
					</Heading>
					<div className="feedback_container">
						{feedbackdata && feedbackdata.length ? (
							feedbackdata.map((data) => <Feedback data={data} key={data.id} />)
						) : (
							<Disclaimer />
						)}
					</div>
				</GridItem>
				<GridItem colSpan={2} p={1} pt={10}>
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
					<Heading p={1} as="h3" size="sm" align="left">
						Rating distribution
					</Heading>
					<DataPieChart feedbackdata={feedbackdata} />
				</GridItem>
			</Grid>
		</div>
	);
}

export default App;
