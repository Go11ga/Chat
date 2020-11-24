import { observable, computed, action } from 'mobx';

export default class Auth{
    constructor(rootStore){
        this.rootStore = rootStore;
        this.storage = rootStore.storage;
    }

    @observable accounts = [
        { id: 100, login: 'aaa', password: 'aaa', name: 'Василий Иванович' },
        { id: 101, login: 'bbb', password: 'bbb', name: 'Иван Петрович' },
    ];

    @observable incData = {
        login: '',
        password: '',
        valid: false
        /*
        errorText: false
        id: 100
        */
    }

    @action changeIncData = (name, value) => {
        this.incData[name] = value;
    }

    @action checkAuth = () => {
        let i = this.accounts.findIndex(elem => elem.login == this.incData.login);

        if(i != -1){
            let passwordIsOk = this.accounts[i].password == this.incData.password;

            if(passwordIsOk){
                this.incData.valid = true;
                this.storage.setItem('USER_ID', this.accounts[i].id);
                this.storage.setItem('USER_NAME', this.accounts[i].name);
            }
        }

        if(!this.incData.valid){
            this.incData.errorText = true;
        }
    }

    @action logOut = () => {
        this.incData.valid = false;
    }

    @computed get authValid(){
        return this.incData.valid;
    }

    @computed get authError(){
        return this.incData.errorText;
    }

    @computed get cashedId(){
        let id = this.storage.getItem('USER_ID');
        return id;
    }
}
