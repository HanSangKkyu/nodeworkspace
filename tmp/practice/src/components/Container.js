import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';

const container = () => {
    return (
    	<div>
		    <Route exact path="/" component={Home}/>
		    <Switch>
		        <Route path="/about" component={About}/>
		        <Route path="/about/:name" component={About}/>
		    </Switch>
	    </div>
	);
};

export default container;
