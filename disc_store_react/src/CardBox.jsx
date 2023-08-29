import {Component} from "react";
import React, {useState, useEffect} from 'react';
import {DiskCard} from "./DiskCard";

export class CardBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
    }

    componentDidMount() {
        fetch('https://localhost:44304/api/Tracks')
            .then(res => res.json())
            .then(data => {
                this.setState({data});
            });
    }

    render() {
        const {data} = this.state;
        return (
            <section className={`container-fluid  align-items-center pt-3`}>
                {data ? (
                        <div className={`container-fluid  m-1 d-flex flex-wrap`} style={{}}>
                        {data.map(x =>
                            <DiskCard track={x}/>)
                        }
                    </div>
                ) : (
                    <div>Loading...</div>
                )}
            </section>
        );
    }
}