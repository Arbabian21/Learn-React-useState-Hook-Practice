import React, { useState } from "react";

function App() {
	const [time, setTime] = useState(new Date().toLocaleTimeString());

	function callSetTime() {
		setTime(new Date().toLocaleTimeString());
	}

	setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);

	return (
		<div className="container">
			<h1>{time}</h1>
			<button onClick={callSetTime}>Get Time</button>
		</div>
	);
}

export default App;
