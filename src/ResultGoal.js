import React, { Component } from 'react';

class ResultGoal extends Component {
	render(){
		var divStyle = {
			paddingLeft: "1%"
		} //we might want to take the divStyle and place it into the App.css body style....

		var headerStyle = {
			textAlign: "left",
			color: "#666",
			fontSize: "40px",
			paddingTop: "4%",
		}

		var inputStyle = {
		  border: "0",
		  outline: "0",
		  width: "80%",
		  height: "40px",
		  borderBottom: "1px solid #666",
		  paddingBottom: "2%",
			margin: "20px",
			fontSize: "35px",
			color: "#666"
		}

		var submitStyle = {
			width: "25px",
			borderRadius: "50%",
			marginLeft: "20px",
			marginRight: "20px"
		}

		return(
			<div style={divStyle}>
				<h1 style={headerStyle}>Result Goal:</h1>
				<form action="#">
				  <input style={inputStyle} type="text" placeholder="What will you accomplish in the next thirteen weeks?"/><br/>
				  <input style={inputStyle} type="text" placeholder="This goal is important to me because..."/>
			    <input style={submitStyle} type="submit" value="✓"/>
			  </form>
				<hr/>
				<br/>
				<br/>
			</div>
		);
	}
}

export default ResultGoal;
