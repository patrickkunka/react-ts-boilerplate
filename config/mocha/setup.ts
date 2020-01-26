import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as  mockCssModules from 'mock-css-modules';
import fetch from 'node-fetch';

mockCssModules.register(['.scss']);

Enzyme.configure({adapter: new Adapter()});

(window as any).fetch = fetch;