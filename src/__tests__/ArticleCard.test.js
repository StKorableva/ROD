import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import ArticleCard from '../components/ArticleCard/ArticleCard';

describe('base test', () => {
	const section = 'Test section',
		heading = 'Test heading',
		description = 'Test description';
	const component = shallow(<ArticleCard section={section} heading={heading} description={description}></ArticleCard>);

	it('render test', () => {
		expect(component).toHaveLength(1);
	});

	it('snapshot test', () => {
		expect(toJSON(component)).toMatchSnapshot();
	});

	it('in the document', () => {
		expect(component.text()).toMatch(section);
		expect(component.text()).toMatch(heading);
		expect(component.text()).toMatch(description);
	});
});
