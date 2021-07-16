import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

// Error on URL.createObjectURL
global.URL.createObjectURL = jest.fn();