import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import NOT_FOUND from "../pages/NOT_FOUND";
import { Feedback } from "./Feedback";
import { InputBox } from "./InputBox";
import { Nav } from "./Nav";

function App() {
	const [feedbackdata, setFeedbackdata] = useState([]);
	return (
		<div className="app">
			<Nav />
			<InputBox setFeedbackdata={setFeedbackdata} />

			<div className="feedback_container">
				{feedbackdata.map((data) => (
					<Feedback data={data} />
				))}
			</div>
		</div>
	);
}

export default App;
