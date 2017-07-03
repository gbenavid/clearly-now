import React, { Component } from 'react';
import ActionableTask from './ActionableTask';


class ShowMore extends Component {
	constructor(props){
		super(props);

		this.state = {
			isChecked: false
		}
	 	this.toggleChange = this.toggleChange.bind(this); // this is a constructor attribute.
	}

	toggleChange (event) {
		this.setState({isChecked: !this.state.isChecked});
	}

	render(){
		var headerStyle = {
			fontSize: "35px"
		}

		var actionableTaskStyle = {
			fontSize: "35px"
		}

		var mainStyle = {
			paddingLeft: "2%",
			width: "80%",
		}

		return (
			<main style={mainStyle}>
			  <input id="toggle" type="checkbox" checked={this.state.isChecked} onChange={this.toggleChange}/>
			  <div id="expand">
			    <section>
			    	<h3 style={headerStyle}>List 3 Reasons Why you would like to accomplish this progres goal</h3>
			    	<div style={actionableTaskStyle}>
				      <ActionableTask order="1"/>
				      <ActionableTask order="2"/>
				      <ActionableTask order="3"/>
				     </div>
			    </section>
			  </div>    
			</main>
		);
	}
}

export default ShowMore;
