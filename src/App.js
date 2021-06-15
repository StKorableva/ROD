import './App.css';
import './css/style.css';
import './css/normalize.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PopularSection from './components/PopularSection/PopularSection';
import PopularSectionStore from './store/PopularSectionStore';

function App() {
	return (
		<div className="App">
			<Header />
			<p>ROD will be here! August 2021 :)</p>
			<PopularSection store={PopularSectionStore}></PopularSection>
			<Footer></Footer>
		</div>
	);
}

export default App;
