import React from "react";

function GuessInput({ guess, setGuess, handleSubmit }) {
	return (
		<form onSubmit={handleSubmit} className="guess-input-wrapper">
			<label>
				Enter your guess:
				<input
					type="text"
					value={guess}
					pattern="[A-Za-z]{5}"
					onChange={(e) => setGuess(e.target.value.toUpperCase())}
					id="guess-input"
					required
				/>
			</label>
		</form>
	);
}

export default GuessInput;
