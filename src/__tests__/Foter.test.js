import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import Footer form '../components/Footer/Footer';

Enzyme.configure({ adapter: new Adapter() });

describe("base test",()=>{
    let component = shallow(<Footer/>);
    it("render test",()=>{
        expect(component).toHaveLength(1);
    })
    it("snapshot test",()=>{
        expect(toJSON(component)).toMatchSnapshot();
    })
})