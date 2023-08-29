import {Component} from "react";
import "bootstrap"
import Logo from './resources/logo.png'
import {forEach} from "react-bootstrap/ElementChildren";
import {SearchBlock} from "./SearchBlock";

export class Header extends Component {
    render() {
        return (
            <div className={`container-fluid d-flex justify-content-around  align-items-center`}
                 style={{height: `5em`}}>
                <img src={Logo} alt={`лого`}
                     style={{padding: 0, margin: 0, imageRendering: `pixelated`, height: `3em`}}/>
                <button style={{cursor: `pointer`}} data-bs-toggle="modal" data-bs-target="#exampleModal" className={`fw-bold border-0 bg-body text-decoration-none text-body fs-4`}>Sing in\up</button>
                <a style={{cursor: `pointer`}} className={`fw-bold text-decoration-none text-body fs-4`}>Cart</a>
                <a style={{cursor: `pointer`}} className={`fw-bold text-decoration-none text-body fs-4`}>Help</a>
                <a style={{cursor: `pointer`}} className={`fw-bold text-decoration-none text-body fs-4`}>Contacts</a>
                <SearchBlock/>
            </div>
        )
    }
}