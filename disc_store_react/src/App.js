import logo from './logo.svg';
import './App.css';
import {Component} from "react";
import {Hover} from "./Hover";
import {Navbar} from "./Navbar";
import {CardBox} from "./CardBox";

class App extends Component {
    render() {
        return (<div className="App">
            <Hover/>
            <div className="d-flex">
                <Navbar/>
                <CardBox/>
            </div>
            <footer className={`border bg-dark`} style={{height: `10em`}}></footer>
        </div>);
    }
}

export default App;
