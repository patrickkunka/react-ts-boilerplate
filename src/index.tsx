import * as React from 'react';
import * as DOM from 'react-dom';

import App from './Components/App/App';
import './Styles/breakpoints';
import './Styles/fonts';
import './Styles/global';
import './Styles/reset';

const root = document.getElementById('root');

DOM.render(<App />, root);
