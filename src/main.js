import React from 'react';
import ReactDOM from 'react-dom';

import App from '@/App';

import storesContext from '@/contexts/stores';
import stores from '@/store';

import '@/styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <storesContext.Provider value={stores}>
        <App/>
    </storesContext.Provider>,
    document.querySelector('#app')
);



