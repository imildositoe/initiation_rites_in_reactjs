import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";

function AppTwo() {
    return (
        <React.Fragment>
            <h2>This is the App two</h2>
        </React.Fragment>
    )
}

ReactDOM.render(
    <>
        <App/>
        <AppTwo/>
    </>,
    document.getElementById('root')
);
