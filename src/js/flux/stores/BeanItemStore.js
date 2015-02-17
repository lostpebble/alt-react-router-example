var alt = require('../alt');
var BeanItemActions = require('../actions/BeanItemActions');

class BeanItemStore {
    constructor() {
        this.bindActions(BeanItemActions);

        this.loadingBeanItem = false;
        this.beanItem = {};
        this.beanItemError = null;
    }

    onRequestBeanItem() {
        this.loadingBeanItem = true;
        this.beanItemError = null;
    }

    onReceiveBeanItem(rawBeanItem) {
        this._init(rawBeanItem);
        this.loadingBeanItem = false;
    }

    onReceiveBeanItemError(error) {
        this.beanItemError = error;
        this.loadingBeanItem = false;
    }

    _init(rawBeanItem) {
        this.beanItem = rawBeanItem;
    }
}

module.exports = alt.createStore(BeanItemStore);