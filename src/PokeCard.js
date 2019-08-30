import React from 'react';
import './PokeCard.css';
function PokeCard(props) {
	let num = ('00' + props.data.key).slice(-3);
	let sprite = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${num}.png`;
	return (
		<div className="card">
			<img className="sprite" src={sprite} alt="Pokemon" />
			<h2>Name:{props.data.name}</h2>
			<h3>Type:{props.data.type}</h3>
			<h3>XP:{props.data.xp}</h3>
		</div>
	);
}
export default PokeCard;
