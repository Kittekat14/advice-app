import React from "react";
import axios from "axios";
import "./App.css";

class App extends React.Component {
	state = { advice: "" };

	componentDidMount() {
		console.log("Comp. did mount");
		this.fetchAdvice();
	}

	fetchAdvice = () => {
		fetch("https://api.adviceslip.com/advice")
			.then((response) => response.json())
			.then((data) => this.setState({ advice: data.slip.advice }))
			.catch((error) => {
				console.log(error);
			});
	};

	render() {
		const { advice } = this.state;

		return (
			<div className='app'>
				<div className='card'>
					<h1 className='heading'>{advice}</h1>
					<button onClick={this.fetchAdvice} className='button'>
						<span>GIVE ME ADVICE!</span>
					</button>
				</div>
			</div>
		);
	}
}

export default App;
