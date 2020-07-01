import React, { useState } from "react";

import SuggestionList from './suggestionlist';
import ChipQueueWrapper from './chipWrapper';


function AutoFillInput(props) {
	const { data } = props;
	const [suggList, setSuggList] = useState([]);
	const [chipQueue, setChipQueue] = useState([]);

	const addChip = (e) => {
		(e.which === 13 && !chipQueue.includes(e.target.value)) && setChipQueue([...chipQueue, e.target.value]);
		(e.target.firstElementChild && !chipQueue.includes(e.target.firstElementChild.innerText)) && setChipQueue([...chipQueue, e.target.firstElementChild.innerText]);
	}
	const filterList = (e) => {
		e.target.value === '' ? setSuggList([]) : setSuggList(data.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase())))
	}
	const removeChip = (e) => {
		setChipQueue(chipQueue.filter(item => `${item}x` !== e.target.parentElement.innerText))
	}
	return (
		<div className="autofill-wrapper">
			<div className="autofill-wrapper_input-section">
				<div>{chipQueue && <ChipQueueWrapper chipQueue={chipQueue} close={removeChip} />}</div>
				<input type="text" onChange={filterList} onKeyPress={addChip} />
			</div>

			<div className="autofill-wrapper_list-section">
				{suggList && <ul className="list-wrapper">{<SuggestionList list={suggList} onSelect={addChip} />}</ul>}
			</div>
		</div>
	);
}

export default AutoFillInput;
