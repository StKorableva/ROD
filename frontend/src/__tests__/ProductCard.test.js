import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import ProductCard from '../components/ProductCard/ProductCard';

describe('base test', () => {
	let component = shallow(
		<ProductCard
			openProductPage={() => {
				console.log('callback#1');
			}}
			addToFavorites={() => {
				console.log('callback#2');
			}}
			url="./test"
			liked={true}
			text="test data / style for test(without fonts)"
			price="1000"
		></ProductCard>
	);

	it('render test', () => {
		expect(component).toHaveLength(1);
	});

	it('snapshot test', () => {
		expect(toJSON(component)).toMatchSnapshot();
	});
});
