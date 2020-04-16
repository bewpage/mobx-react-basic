import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// this is text added in version 1.1.0
const employeesList = [
    {name: "John Doe", salary: 150},
    // new branch test
];

// ad this is text in bug 911
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);