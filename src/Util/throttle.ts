const throttle = (
    handler: (...args: any[]) => void,
    delay: number
): ((...args: any[]) => void) => {
    let timerId: number | null = null;
    let last: number = -Infinity;

    return function(this: any, ...args): void {
        const now = Date.now();

        const later = () => {
            timerId = null;

            handler.apply(this, args);

            last = now;
        };

        const difference = now - last;

        if (difference >= delay) {
            later();
        } else {
            window.clearTimeout(timerId!);

            timerId = window.setTimeout(later, delay - difference);
        }
    };
};

export default throttle;
