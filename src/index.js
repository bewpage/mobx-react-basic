import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// here is bug #922
const employeesList = [
    {name: "John Doe", salary: 150},
    // new branch test
];


// added text in 911 branch only for test 02


// ad this is text in bug 911
// new staff in release/1.1.0 branch only

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);