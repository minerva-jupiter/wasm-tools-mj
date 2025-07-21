'use client'

import "./style-password.css";
import React, { useState } from "react";

export default function Password() {
	const [numberIsChecked,setNumberIsChecked] = useState(false);
	const handleNumberCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const checked = event.target.checked;
		setNumberIsChecked(checked);
	};

	const [lowletterIsChecked,setLowletterIsChecked] = useState(false);
	const handleLowletterCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const checked = event.target.checked;
		setLowletterIsChecked(checked);
	};
	const [capitalletterIsChecked,setCapitalletterIsChecked] = useState(false);
	const handleCapitalletterCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const checked = event.target.checked;
		setCapitalletterIsChecked(checked);
	};

	return (
		<>
			<h1>This is Password</h1>
			<br />
			<h2>Permission characters</h2>
			<br />
			<h4 className="permissionListItem"><input type="checkbox" checked={numberIsChecked} onChange={handleNumberCheckboxChange}/>number</h4>
			<h4 className="permissionListItem"><input type="checkbox" checked={lowletterIsChecked} onChange={handleLowletterCheckboxChange}/>lowercase letter</h4>
			<h4 className="permissionListItem"><input type="checkbox" checked={capitalletterIsChecked} onChange={handleCapitalletterCheckboxChange}/>capital letter</h4>
		</>
	);
};
