import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const employeesList = [
    {name: "John Doe", salary: 150},
];

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);