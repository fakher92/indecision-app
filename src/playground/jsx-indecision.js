// console.log('hello');

// const app = {
// 	title: 'Indecision App',
// 	subtitle: 'Put your life in the hands of a computer',
// 	options : []
// }

// const onFormSubmit = (e) => {
// 	e.preventDefault();
	
// 	const option = e.target.elements.option.value;

// 	if (option) {
// 		app.options.push(option);
// 		e.target.elements.option.value = '';
// 		renderApp();
// 	}
// };

// const onRemoveAll = () => {
// 	app.options = [];
// 	renderApp();
// }

// const appRoot = document.getElementById('app');

// const onMakeDecision = () => {
// 	const randomNum = ~~(Math.random() * app.options.length);
// 	const option = app.options[randomNum];
// 	alert(option);
// }

// const renderApp = () => {
// 	const template = (
// 		<div>
// 			<h1>{app.title}</h1>
// 			{app.subtitle && <p>{app.subtitle}</p>}
// 			<p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
// 			<button disabled={!app.options.length} onClick={onMakeDecision}>What should i do?</button>
// 			<button onClick={onRemoveAll}>Remove All</button>
// 			<ol>
// 				{
// 					app.options.map(option => <li key={option}>{option}</li>)
// 				}
// 			</ol>
// 			<form onSubmit={onFormSubmit}>
// 				<input type="text" name="option"/>
// 				<button>Add option</button>
// 			</form>
// 		</div>
// 	);
	
// 	ReactDOM.render(template, appRoot);
// }

// renderApp();