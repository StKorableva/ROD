import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import EventCard from '../components/EventCard/EventCard';

describe('base test', () => {
	const address = 'Ул. Пушкина, 8',
		time = '23 Марта, 16:00',
		heading = 'Встреча с автором/выставка',
		text = 'Пару предложений для описания эвента, что и кто там будет. Подробности о месте и времени встречи ниже.';
	const component = shallow(
		<EventCard
			openEventPage={() => {
				console.log('openEventPage');
			}}
			address={address}
			time={time}
			heading={heading}
			text={text}
		></EventCard>
	);

	it('render test', () => {
		expect(component).toHaveLength(1);
	});

	it('snapshot test', () => {
		expect(toJSON(component)).toMatchSnapshot();
	});

	it('in the document', () => {
		expect(component.text()).toMatch(address);
		expect(component.text()).toMatch(time);
		expect(component.text()).toMatch(heading);
		expect(component.text()).toMatch(text);
	});
});
