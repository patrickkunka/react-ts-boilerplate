import {assert} from 'chai';
import {SinonFakeTimers, SinonStub, stub, useFakeTimers} from 'sinon';

import throttle from './throttle';

interface ITestContext {
    consumerFunctionStub: SinonStub;
    clock: SinonFakeTimers;
}

describe('throttle', () => {
    let context: ITestContext;

    beforeEach(() => {
        context = {
            consumerFunctionStub: stub(),
            clock: useFakeTimers()
        };
    });

    afterEach(() => {
        context.clock.restore();
    });

    it('returns a new function given a function and a throttle delay', () => {
        const throttled = throttle(context.consumerFunctionStub, 200);

        assert.isFunction(throttled);
    });

    it('invokes the provided function immediately on first invocation', () => {
        const throttled = throttle(context.consumerFunctionStub, 200);

        throttled();

        assert(context.consumerFunctionStub.called);
    });

    it(
        'invokes the provided function once per throttle delay for multiple ' +
            'subsequent invocations within the delay duration with the last ' +
            'arguments received',
        () => {
            const throttled = throttle(context.consumerFunctionStub, 200);

            throttled(1);

            assert(context.consumerFunctionStub.calledOnce);

            throttled(2);
            throttled(3);
            throttled(4);

            assert(context.consumerFunctionStub.calledOnce);

            context.clock.tick(200);

            assert(context.consumerFunctionStub.calledTwice);
            assert(context.consumerFunctionStub.calledWith(1));
            assert(context.consumerFunctionStub.calledWith(4));
        }
    );
});