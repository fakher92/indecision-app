// class VisibilityToggle extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.handleToggleVisibilty = this.handleToggleVisibilty.bind(this);
// 		this.state = {
// 			visibility : false
// 		}
// 	}

// 	handleToggleVisibilty () {
// 		this.setState((prevState) => {
// 			return {
// 				visibility : !prevState.visibility
// 			}
// 		});
// 	}
// 	render() {
// 		return (
// 			<div>
// 				<h1>
// 					Visibility Toggle
// 				</h1>
// 				<button onClick={this.handleToggleVisibilty}>
// 					{this.state.visibility ? 'Hide' : 'Show'}
// 				</button>
// 				{this.state.visibility && (
// 					<div>
// 						<p>Hey, there are some details you can see now.</p>
// 					</div>
// 				)}
// 			</div>
// 		)
// 	}
// }

// ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
