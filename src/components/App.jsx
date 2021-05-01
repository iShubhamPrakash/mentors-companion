import { useState } from "react";
import { Feedback } from "./Feedback";
import { InputBox } from "./InputBox";

import { Grid, GridItem, Heading } from "@chakra-ui/react";
import DataPieChart from "./DataPieChart";
import { defaultData } from "../default_data.js";

function App() {
	const [feedbackdata, setFeedbackdata] = useState(defaultData);
	return (
		<div className="app">
			<Grid
				templateRows="repeat(1, 1fr)"
				templateColumns="repeat(7, 1fr)"
				gap={4}
			>
				<GridItem colSpan={5}>
					<Heading pl={4} as="h3" size="md">
						Reviews History
					</Heading>
					<div className="feedback_container">
						{feedbackdata.map((data) => (
							<Feedback data={data} />
						))}
					</div>
				</GridItem>
				<GridItem colSpan={2} p={1} pt={10}>
					{" "}
					<InputBox setFeedbackdata={setFeedbackdata} />
					<DataPieChart feedbackdata={feedbackdata} />
				</GridItem>
			</Grid>
		</div>
	);
}

export default App;
