import {assert} from 'chai';
import {mount} from 'enzyme';
import * as React from 'react';
import {SinonStub, stub} from 'sinon';

import * as ServiceUrls from '../../Services/Constants/ServiceUrls';

import App from './App';

interface ITestContext {
    fetchStub: SinonStub<Parameters<typeof window['fetch']>, ReturnType<typeof window['fetch']>>
}

describe('<App />', () => {
    let context: ITestContext;

    beforeEach(() => {
        context = {
            fetchStub: stub(window, 'fetch').resolves({
                ok: true,
                json: () => Promise.resolve({})
            } as Response)
        };
    });

    afterEach(() => {
        context.fetchStub.restore();
    });

    it('requests data when mounted', async () => {
        mount(<App />);

        assert.isTrue(context.fetchStub.calledWith(ServiceUrls.MOCK_SERVICE));
    });
});