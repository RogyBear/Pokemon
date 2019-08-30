import React from 'react';
import PokeDeck from './PokeDeck';
import pokemonData from './pokemonData';
import './App.css';

function App() {
	const data = pokemonData.map(function(el) {
		return <PokeDeck data={{ key: el.id, name: el.name, type: el.type, xp: el.base_experience }} />;
	});
	return <div className="App">{data}</div>;
}

export default App;
