import React from 'react';
import PokeCard from './PokeCard';
import pokemonData from './pokemonData';
import PokeDeck from './PokeDeck';
import './App.css';

function App() {
	const data = pokemonData.map(function(el) {
		return <PokeCard data={{ key: el.id, name: el.name, type: el.type, xp: el.base_experience }} />;
	});

	return (
		<div className="App">
			<PokeDeck data={data} />
		</div>
	);
}

export default App;
