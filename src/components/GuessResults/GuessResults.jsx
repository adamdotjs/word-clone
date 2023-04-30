import React from "react";
import Guess from "../Guess/Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ guesses }) {
	return (
		<div className="guess-results">
			{range(NUM_OF_GUESSES_ALLOWED).map((idx) => (
				<Guess key={idx} guess={guesses[idx] ?? []} />
			))}
		</div>
	);
}

export default GuessResults;
