import React, { Component } from 'react';

import FirstComponent from './FirstComponent';

class App extends Component {
    render() {
        return (
            <div className="container">
                <h1>React Boilerplate</h1>
                <FirstComponent />
            </div>
        );
    }
}

export default App;
