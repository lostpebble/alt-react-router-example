var React = require('react');
var { Route, DefaultRoute } = require('react-router');

var App = require('./App');

var BeanListPage = require('./pages/BeanListPage');
var BeanItemPage = require('./pages/BeanItemPage');
var BeanItemEditPage = require('./pages/BeanItemEditPage');

var routes = (
    <Route name="home" path='/' handler={App}>
        <DefaultRoute name="beanList" handler={BeanListPage} />
        <Route name="beanItemPage" path="/bean/:beanID" handler={BeanItemPage} />
        <Route name="beanItemEditPage" path="/bean/:beanID/edit" handler={BeanItemEditPage} />
    </Route>
);

module.exports = routes;