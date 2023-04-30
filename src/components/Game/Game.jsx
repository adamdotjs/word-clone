import React from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);

// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [guesses, setGuesses] = React.useState([]);
	const [guess, setGuess] = React.useState("");
	const [isWinner, setIsWinner] = React.useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setGuesses((prevGuesses) => [...prevGuesses, checkGuess(guess, answer)]);
		setGuess("");

		if (guess === answer) {
			const winner = !isWinner;
			setIsWinner(winner);
		}

		console.log(guesses);
	};

	const reset = () => {
		window.location.reload();
	};

	return (
		<div>
			<GuessResults guesses={guesses} />
			{isWinner ? (
				<div className="happy banner">
					<p>
						<strong>Congratulations!</strong> Got it in <strong>{guesses.length} guesses</strong>.
					</p>
				</div>
			) : guesses.length >= NUM_OF_GUESSES_ALLOWED ? (
				<div className="sad banner">
					<p>
						Sorry, the correct answer is <strong>{answer}</strong>.
					</p>
					<button onClick={reset}>Restart</button>
				</div>
			) : (
				<>
					<GuessInput guess={guess} setGuess={setGuess} handleSubmit={handleSubmit} />
				</>
			)}
		</div>
	);
}

export default Game;
