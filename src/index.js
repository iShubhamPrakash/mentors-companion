import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./components/App";
import { Nav } from "./components/Nav";
import NotFound from "./components/NotFound";
import { Disclaimer } from "./components/Disclaimer";
import { Footer } from "./components/Footer";

ReactDOM.render(
	<Router>
		<ChakraProvider>
			<Nav />
			<Switch>
				<Route exact path="/">
					<App />
				</Route>

				<Route exact path="/about">
					<Disclaimer />
				</Route>

				<Route exact path="*">
					<NotFound />
				</Route>
			</Switch>
			<Footer />
		</ChakraProvider>
	</Router>,
	document.getElementById("root")
);
