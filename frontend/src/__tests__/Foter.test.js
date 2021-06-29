import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Footer from '../components/Footer/Footer';

describe('base test', () => {
	let component = shallow(<Footer></Footer>);

	it('render test', () => {
		expect(component).toHaveLength(1);
	});

	it('snapshot test', () => {
		expect(toJSON(component)).toMatchSnapshot();
	});
});
