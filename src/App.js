import React from "react";
import "./App.scss";

import AutoFillInput from './components/autofilinput';
import list from './constants/suggestionlist';

function App() {
	const { data } = list;
	console.log("data", data)
	return (
		<div className="App">
			<AutoFillInput
				data={data}
			/>
		</div>
	);
}

export default App;
