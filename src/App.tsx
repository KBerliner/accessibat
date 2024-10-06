import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import About from "./pages/About";
import Home from "./pages/Home";
import RadioButtonJavaScript from "./pages/RadioButtonJavaScript";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route
					path="/radio-button-javascript"
					element={<RadioButtonJavaScript />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
