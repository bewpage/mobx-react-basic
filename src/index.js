import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// here is bug #922
const employeesList = [
    {name: "John Doe", salary: 150},
    // new branch test
];

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);