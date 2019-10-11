import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Menu from './components/Menu';
import Container from './components/Container';



const App = () => (
    <BrowserRouter>
		<Menu/>	
		<Container />
    </BrowserRouter>
);

export default App;