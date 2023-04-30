import React from "react";

function Keyboard({ guess }) {
	const LETTERS_TOP = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
	const LETTERS_MIDDLE = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
	const LETTERS_BOTTOM = ["Z", "X", "C", "V", "B", "N", "M"];

	return (
		<div className="keyboard">
			<div className="upper">
				{LETTERS_TOP.map((char) => (
					<div key={char} className="key">
						{char}
					</div>
				))}
			</div>
			<div className="middle">
				{LETTERS_MIDDLE.map((char) => (
					<div key={char} className="key">
						{char}
					</div>
				))}
			</div>
			<div className="lower">
				{LETTERS_BOTTOM.map((char) => (
					<div key={char} className="key">
						{char}
					</div>
				))}
			</div>
		</div>
	);
}

export default Keyboard;
