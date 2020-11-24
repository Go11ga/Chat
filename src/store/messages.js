import { observable, computed, action } from 'mobx';

export default class Messages{
    constructor(rootStore){
        this.rootStore = rootStore;
        this.storage = rootStore.storage;
    }

    @observable workMsgArr = [
        { key: '20 08 2020 21:50:14 789', id: 100, time: '20 08 21:50:14', text: 'Всем привет! Это раздел для работы.', correct: false },
        { key: '20 08 2020 21:51:06 125', id: 101, time: '20 08 21:51:06',  text: 'Добрый день!', correct: false },
        { key: '20 08 2020 21:51:12 780', id: 100, time: '20 08 21:51:12', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa nemo ea, eligendi officiis pariatur inventore architecto magnam quae deleniti sed ullam reprehenderit tempore aperiam consequuntur iure dolorum fuga rerum dicta!', correct: false },
        { key: '20 08 2020 21:51:21 129', id: 103, time: '20 08 21:51:21',  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa nemo ea, eligendi officiis pariatur inventore architecto magnam quae deleniti sed ullam reprehenderit tempore aperiam consequuntur iure dolorum fuga rerum dicta!', correct: false },
        { key: '20 08 2020 21:51:34 580', id: 100, time: '20 08 21:51:34', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa nemo ea, eligendi officiis pariatur inventore architecto magnam quae deleniti sed ullam reprehenderit tempore aperiam consequuntur iure dolorum fuga rerum dicta!', correct: false },
        { key: '20 08 2020 21:51:51 900', id: 101, time: '20 08 21:51:51', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa nemo ea, eligendi officiis pariatur inventore architecto magnam quae deleniti sed ullam reprehenderit tempore aperiam consequuntur iure dolorum fuga rerum dicta!', correct: false }
    ];

    @observable currentMsg = '';

    @action changeCurrentMsg = (value) => {
        this.currentMsg = value;
    }

    @action addMsg = () => {
        this.workMsgArr.push({ key: this.key, id: this._getId(), time: this.date, text: this.currentMsg })
        this.currentMsg = '';
    }

    @action deleteMsg = (val) => {
        let i = this._findIndex(val);
        this.workMsgArr.splice(i, 1);
    }

    @action openMsg = (val) => {
        let i = this._findIndex(val);
        this.workMsgArr[i].correct = true;
    }

    @action correctMsg = (key, val) => {
        let i = this._findIndex(key);
        this.workMsgArr[i].text = val;
    }

    @action closeMsg = (val) => {
        let i = this._findIndex(val);
        this.workMsgArr[i].correct = false;
    }

    @computed get key(){
        let date = this._dateDetails();

        return date.day + ' ' + date.month + ' ' + date.year + ' ' + date.time + ' ' + date.ms;
    }

    @computed get date(){
        let date = this._dateDetails();

        return date.day + ' ' + date.month + ' ' + date.time;
    }

    _findIndex(val){
        let i = this.workMsgArr.findIndex(elem => elem.key == val);
        return i;
    }

    _getId(){
        return this.storage.getItem('USER_ID');
    }

    _dateDetails(){
        let date = new Date();

        let year = date.getFullYear();
        let month = this._addZero(date.getMonth() + 1);
        let day = this._addZero(date.getDate());
        let time = date.toLocaleTimeString();
        let ms = date.getMilliseconds();

        return {day: day, month: month, year: year, time: time, ms: ms};
    }

    _addZero(val){
        return val < 10 ? val = '0' + val : val;
    }
}







