var BeanListActions = require('../actions/BeanListActions');
var alt = require('../alt');

class BeanListStore {
    constructor() {
        this.bindActions(BeanListActions);

        this.loadingBeanList = false;
        this.beanList = [];
    }

    onRequestBeanList() {
        this.loadingBeanList = true;
    }

    onReceiveBeanList(rawList) {
        this._init(rawList);
        this.loadingBeanList = false;
    }

    _init(rawList) {
        this.beanList = rawList;
    }
}

module.exports = alt.createStore(BeanListStore);