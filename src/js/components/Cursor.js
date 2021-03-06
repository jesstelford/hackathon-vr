import {Animation, Entity} from 'aframe-react';
import React from 'react';

export default props => {
	const geometry = {
		primitive: 'ring',
		radiusInner: 0.0075,
		radiusOuter: 0.012
	};
	const material = {
		color: props.color,
		shader: 'flat',
		opacity: props.opacity || 0.9,
		transparent: true
	};
	return (
		<Entity cursor="maxDistance: 30;" geometry={geometry} material={material} position="0 0 -1">
			<Animation attribute="scale" begin="click" dur="150" fill="backwards"
					   to="0 0 0"/>
		</Entity>
	);
}
