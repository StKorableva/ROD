import Enzyme, { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Footer from '../components/Footer/Footer';

Enzyme.configure({ adapter: new Adapter() });
describe('base test', () => {
	let component = shallow(<Footer></Footer>);

	it('render test', () => {
		expect(component).toHaveLength(1);
	});

	it('snapshot test', () => {
		expect(toJSON(component)).toMatchSnapshot();
	});
});
