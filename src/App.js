import './App.css';
import Header from './components/Header/Header';
import ProductCard from './components/ProductCard/ProductCard';

function App() {
	return (
		<div className="App">
			<Header />
			<ProductCard
				openProductPage={() => {
					console.log('callback#1');
				}}
				addToFavorites={() => {
					console.log('callback#2');
				}}
				/* url="./test" */
				text="data / style for test(without fonts)"
				price="1000"
			></ProductCard>
			<p>ROD will be here! August 2021 :)</p>
		</div>
	);
}

export default App;
