import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
	return (
		<p className="guess">
			{range(5).map((idx) => (
				<React.Fragment key={idx}>
					{guess[idx] ? (
						<span className={`cell ${guess[idx]?.status}`}>{guess[idx]?.letter}</span>
					) : (
						<span className="cell"></span>
					)}
				</React.Fragment>
			))}
		</p>
	);
}

export default Guess;
