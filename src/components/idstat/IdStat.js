import React, { useContext } from 'react';

import { observer } from 'mobx-react';
import storesContext from '@/contexts/stores';

import styles from './styles.module.css';

export default observer(function(){
    let { auth: authStore } = useContext(storesContext);
    let id = authStore.rootStore.storage['USER_ID'];
    let name = authStore.rootStore.storage['USER_NAME'];

    return <div>
        <div>ID: {id}</div>
        <div>Name: {name}</div>
    </div>
});
