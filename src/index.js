import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

ReactDOM.render(
    <App />,
    document.getElementById('index')
);

// if(typeof(module.hot) !== 'undefined') {
//     module.hot.accept() // eslint-disable-line no-undef
// }
