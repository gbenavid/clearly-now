import React, { Component } from 'react';

class ActionableTask extends Component {

	render () {
		var inputStyle = {
			border: "none",
		  position: "relative",
  		padding: "10px",
  		width: "80%",
  		backgroundColor: "#fdfdfd",
		  borderRadius: "5px",
		  marginLeft: "50px",
		  fontSize: "20px"
		}

		return (
			<div>{this.props.order}
				<input style={inputStyle} id="input-at" type="text"></input>
			</div>
		);
	}
}

export default ActionableTask;
