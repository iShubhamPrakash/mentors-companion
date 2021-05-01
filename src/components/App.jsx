import { Route, Switch } from "react-router-dom";
import Home from "./modules/Home/Home";
import Demo1 from "./modules/Demo1/pages/Demo1";
import Demo2 from "./modules/Demo2/pages/Demo2";
import NOT_FOUND from "./modules/NOT_FOUND/NOT_FOUND";

function App() {
	return (
		<Switch>
      	<Route exact path="/" component={Home} />	
      	<Route exact path="/demo1" component={Demo1} />	
      	<Route exact path="/demo2" component={Demo2} />	
      	<Route exact path="" component={NOT_FOUND} />	
		</Switch>
	);
}

export default App;
