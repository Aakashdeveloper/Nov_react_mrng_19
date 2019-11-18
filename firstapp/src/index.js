import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import NewsList from './components/newsList';
import Header from './components/Header';
import JSON from './db.json'

class App extends Component {
    constructor(props){
        super()

        this.state = {
            news:JSON,
            filtered: JSON
        }
    }

    filterNews(keyword){
        const output = this.state.news.filter((data) => {
            return data.title.toLowerCase().indexOf(keyword.toLowerCase())>-1;
        })

        this.setState({filtered:output})
    }
    // ages.filter((data)=> {return data>= 18})
    render(){
        return(
            <div>
                <Header usertext={(uin) => {this.filterNews(uin)}}></Header>
                <hr/>
               <NewsList newsdata={this.state.filtered}></NewsList>
            </div>
            
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))