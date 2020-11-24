import { configure } from 'mobx';

import AuthStore from './auth';
import MessagesStore from './messages';
import ChatterStore from './chatter';

class RootStore {
    constructor() {
        this.storage = localStorage;

        this.auth = new AuthStore(this);
        this.messages = new MessagesStore(this);
        this.chatter = new ChatterStore(this);
    }
}

export default new RootStore();
