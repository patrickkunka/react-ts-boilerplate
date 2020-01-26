import * as React from 'react';

import Button from '../Button/Button';

import * as styles from './main.scss';

interface IMainProps {
    message: string;
}

const Main: React.FC<IMainProps> = ({message}) => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
        <main className={styles.main}>
            <h1 className={styles.heading}>{message}</h1>

            <form onSubmit={handleSubmit}>
                <Button text="Submit" type="submit"/>
            </form>
        </main>
    );
};

export default Main;
