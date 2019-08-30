import React from 'react';
import './PokeDeck.css';
function PokeDeck(props) {
	let pokemon = {
		player1: [],
		player2: [ ...props.data ]
	};

	while (pokemon.player2.length > pokemon.player1.length) {
		// this is data that will be used temporarily, as having a large data set will not allow for this type of random drawing to work
		let random = Math.floor(Math.random() * pokemon.player2.length);
		let draw = pokemon.player2.splice(random, 1);
		pokemon.player1.push(draw);
	}
	console.log(props.data);
	return (
		<div className="game-field">
			<div className="deck1">{pokemon.player1}</div>
			<div className="deck2">{pokemon.player2}</div>
		</div>
	);
}

export default PokeDeck;
