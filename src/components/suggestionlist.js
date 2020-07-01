import React from "react";

const SuggestionList = (props) => {
	const { onSelect, list } = props;
	return list.map((item, index) => (
		<li key={index} className="list-item">
			<div onClick={onSelect}>
				{item.img && <img className="list-image" alt="profile_img">{item.img}</img>}
				<label className="list-name">{item.name}</label>
			</div>
		</li>
	));
};

export default SuggestionList;