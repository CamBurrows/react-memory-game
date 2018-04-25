import React from 'react';
import Score from './Score.js';
import HighScore from './HighScore.js';

const Banner = props => (
    <div className="container-fluid banner">
			<div className="row">
				<div className="col sm-8">
					<h1 className="display-4">A Game of Groans: GOT character test</h1>
					<p className="lead">Try to click on all the portraits! If you repeat, you lose and your score goes back to 0.</p>
				</div>
				<div className="col sm-4">
					<HighScore highScore={props.highScore}/><Score score={props.score}/>
				</div>
		</div>
	</div>
)

export default Banner;