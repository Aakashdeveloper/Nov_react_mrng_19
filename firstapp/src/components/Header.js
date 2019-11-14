import React,{ Component} from 'react';
import './Header.css';

class Header extends Component {
    constructor(){
        super()

        this.state={
            title: 'React App',
            keyWords:''
        }
    }

    inputChange(event){
        // console.log(event.target.value)
        this.setState({keyWords:event.target.value})
    }
    render(){
        return(
            <header >
                <h1 className="logo"
                onClick={()=> console.log('clicked')}
                >{this.state.title}</h1>
                <center>
                    <input type="text" onChange={this.inputChange.bind(this)}/>
                    <h3>{this.state.keyWords}</h3>
                </center>
                <hr/>
            </header>
        )
    }
}

export default Header;



/*
const Header = () => {
    return(
        <div>
            <center>
                <h1>Header</h1>
                <input type="text"/>
            </center>
            <hr/>
        </div>
    )
}
*/
