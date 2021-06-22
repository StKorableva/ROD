import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import PopularSection from '../components/PopularSection/PopularSection';

const objectForTest = [
	{ liked: true, imgUrl: './', text: 'Test', price: 10000, id: 1 },
	{ liked: false, imgUrl: './', text: 'Test', price: 10000, id: 1 },
];

describe('base test', () => {
	const component = shallow(
		<PopularSection
			fetching={false}
			heading="Популярное"
			data={objectForTest}
		></PopularSection>
	);

	it('render test', () => {
		expect(component).toHaveLength(1);
	});

	it('snapshot test', () => {
		expect(toJSON(component)).toMatchSnapshot();
	});

	it(`contains product cards (${objectForTest.length})`, () => {
		expect(component.find('ProductCard')).toHaveLength(2);
	});
});

describe('/fetching/ reaction test', () => {
	const component = shallow(
		<PopularSection
			fetching={true}
			heading="Популярное"
			data={[]}
		></PopularSection>
	);
	const Fragment = <></>;
	it('return fragment when fetching=true', () => {
		expect(component.contains(Fragment));
	});
});
