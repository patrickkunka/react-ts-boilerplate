import * as React from 'react';

import * as styles from './button.scss';

interface IButtonProps {
    text: string;
    disabled?: boolean;
    onClick?: (e: React.MouseEvent) => void;
    type?: 'button' | 'submit';
}

const Button: React.FC<IButtonProps> = (props) => (
    <button
        className={styles.buttonPrimary}
        disabled={props.disabled}
        onClick={props.onClick}
        type={props.type || 'button'}
    >
        {props.text}
    </button>
);

export default Button;
