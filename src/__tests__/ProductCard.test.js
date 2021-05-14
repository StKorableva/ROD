import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJSON from "enzyme-to-json";
import ProductCard from "../components/ProductCard/ProductCard";

Enzyme.configure({ adapter: new Adapter() });
describe("base test", () => {
	let component = shallow(
		<ProductCard
			openProductPage={() => {
				console.log("callback#1");
			}}
			addToFavorites={() => {
				console.log("callback#2");
			}}
			url="./test"
			text="test data / style for test(without fonts)"
			price="1000"
		></ProductCard>
	);

	it("render test", () => {
		expect(component).toHaveLength(1);
	});

	it("snapshot test", () => {
		expect(toJSON(component)).toMatchSnapshot();
	});
});
