import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// this is text added in version 1.1.0
const employeesList = [
    {name: "John Doe", salary: 150},
    // new branch test
];

<<<<<<< HEAD
// ad this is text in bug 911
=======
// new staff in release/1.1.0 branch only
>>>>>>> 21adad2d1bc2a150f5c92dfffdcf527998fe1d65
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);