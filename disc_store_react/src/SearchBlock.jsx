import {Component} from "react";

export class SearchBlock extends Component {
	render() {
		return (
			<input className={`border-end-0 border-top-0 border-start-0`} placeholder={`Search...`}></input>
		)
	}
}