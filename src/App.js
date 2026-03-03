import './App.css';
import Opinions from './components/Opinions.jsx';
import { opinionsData } from './data/opinionsData.js';
//We use { opinionsData } to import the opinionsData array from the opinionsData.js file. 
//This allows us to access the data and use it in our App component to render the opinions dynamically.

function App() {
	return (
		<div className="App">
			<div className='main-container'>
				<h1>Our Opinions</h1>
				{opinionsData.map((opinion) => (
					//Using the map function to iterate through the opinionsData array and render an Opinions component for each opinion object. 
					//The key prop is set to the unique id of each opinion to help React identify which items have changed, are added, or are removed.
					<Opinions 
						key={opinion.id}
						image={opinion.image}
						context={opinion.context}
						name={opinion.name}
						job={opinion.job}
						opinion={opinion.opinion}
					/>
				))}
			</div>
		</div>
	);
}

export default App;