import React from "react";

const ChipQueueWrapper = (props) => {
	return props.chipQueue.map((chip, index) => (
		<div key={index}>
			<span className="input-chip">
				{chip}
				<span onClick={props.close}>x</span>
			</span>
		</div>
	));
};

export default ChipQueueWrapper;
