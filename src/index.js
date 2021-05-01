import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";
import { Nav } from "./components/Nav";

ReactDOM.render(
	<Router>
		<ChakraProvider>
			<Nav />
			<App />
		</ChakraProvider>
	</Router>,
	document.getElementById("root")
);
