var fakeData = require('./EXAMPLE_DATA');

// Emulate API requests

class BeanWebApi {

    // API requests using the Promise interface

    // TODO: caching data that has already been received from the server

    static requestBeanList() {
        return new Promise(function(resolve, reject) {

            setTimeout(function() {
                resolve(fakeData.getList);
            }, Math.random() * 2000 + 1000);

            // Short timeout for testing
            /*setTimeout(function() {
                resolve(fakeData.getList);
            }, 1);*/
        });
    }

    static requestBeanItem(beanID) {
        return new Promise(function(resolve, reject) {

            setTimeout(function() {
                if (fakeData.getBean[beanID]) {
                    resolve(fakeData.getBean[beanID]);
                } else {
                    reject("Bean item does not exist");
                }

            }, Math.random() * 700 + 100);
        });
    }
}

module.exports = BeanWebApi;