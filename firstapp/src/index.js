import React from 'react';
import ReactDOM from 'react-dom';

import Second from './components/second';
import Header from './components/Header'

const App = () => {
    return(
        <div>
            <Header></Header>
            <h1>Hi To React</h1>
            <h2>This is React Component</h2>    
            <hr/>
            <Second/>
        </div>
        
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))