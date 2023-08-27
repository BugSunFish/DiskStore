import logo from './logo.svg';
import './App.css';
import {Component} from "react";
import {Header} from "./Header";
import {Navbar} from "./Navbar";
import {CardBox} from "./CardBox";

class App extends Component {
    render() {
        return (<div className="App">
            <Header/>
            <div className="d-flex">
                <Navbar/>
                <CardBox/>
            </div>
            <footer className={`bg-dark`} style={{height: `10em`}}></footer>
        </div>);
    }
}

export default App;
