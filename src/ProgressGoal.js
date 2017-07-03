import React, { Component } from 'react';
import ShowMore from './ShowMore';

class ProgressGoal extends Component {
	render(){
		var prgoressGoalHeader = {
			padding: "40px",
			color: "#666"
		}

		var containerStyle = {
			paddingLeft: "2%"
		}

		return(
			<div style={containerStyle}>
				<h1 style={prgoressGoalHeader}>Progress Goals:</h1>
				<form action="#">
				  1. <input type="text"/><ShowMore/><br/>
				  2. <input type="text"/><ShowMore/><br/>
					3. <input type="text"/><ShowMore/><br/>
			  </form>
			</div>
		);
	}
}

export default ProgressGoal;
