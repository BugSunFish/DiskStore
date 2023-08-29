import {Component} from "react";
import icoPlay from './resources/Polygon 1.svg'

export class DiskCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            track: props.track,
        }
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    render() {
        return (
            <div unselectable={`on`} className="d-flex flex-column align-items-center justify-content-around" style={{
                width: `16em`,
                height: `18em`,
                marginRight: `2em`,
                marginBottom: `3em`,
                border: `0.4em #84B5FB solid`,
                borderRadius: `1em`,
            }}>
                <div className="p-1 align-items-center  justify-content-center d-flex" style={{
                    border: `0.4em #84B5FB solid`,
                    width: `12em`,
                        zIndex: 1,
                    height: `12em`,
                    borderRadius: `0.3em`,
                }}>
                    <div className={`align-items-center justify-content-center position-absolute d-flex`} style={{
                        borderRadius: `50%`, border: `5px solid #37363E`,
                        width: `10em`,
                        zIndex: 1,
                        height: `10em`
                    }}>
                        <img className={`position-absolute align-self-center justify-self-center`}  src={icoPlay}
                             style={{paddingLeft: `1em`, transform: `scale(0.65)`, cursor: `pointer`}}
                             unselectable={`on`}/>
                        <div className="align-self-end d-block text-center position-absolute justify-content-end text-white fw-bold"
                             style={{
                                 background: `#B60044`,
                                 border: `#B60044 solid 0.5em`,
                                 width: `4em`,
                                 borderLeft: null,
                                 borderBottom: null,
                                 borderTopLeftRadius: `0.4em`,
                                 marginLeft: `7.32em`,
                                 zIndex: 0,
                                 paddingLeft: 2,
                                 marginBottom: `-0.95em`
                             }}>{this.state.track.price}$ 
                        </div>
                    </div>
                </div>
                <h3>{this.state.track.name}</h3>
            </div>
        )
    }
}