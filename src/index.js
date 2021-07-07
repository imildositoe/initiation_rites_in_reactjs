import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(
    React.createElement(
        "h1",
        {style: {color: "blue"}},
        "Hello World!"
    ), //what we want to create
    document.getElementById('root') // where we want to create
);
