import React, { Component } from 'react';
import { StickBoard } from './StickBoard';
import { Controls } from './Controls';

export class Game extends Component {
    constructor(props) {
        super(props);

        this.state = {
            playerRedTurn: true,
            sticksLeft: 20,
            status: '',
        }
    }
    render() {
        return(
            <div>
                <StickBoard 
                    sticksLeft={this.state.sticksLeft}
                    playerRedTurn={this.state.playerRedTurn}
                />
                <Controls 
                    playerRedTurn={this.state.playerRedTurn}
                    sticksLeft={this.state.sticksLeft}
                    onClick={this.handleClick.bind(this)}
                />
                    {this.state.status ? (<h1> Winner: {this.state.status} </h1>) :
                        (<h1> {this.state.playerRedTurn ? 'RED TURN' : 'BLUE TURN'} </h1>)} 
                <button 
                    className="Reset-button"
                    onClick={this.resetClick.bind(this)}
                >
                    RESET
                </button>
            </div>

        )
    }


handleClick(i) {
    const newState = {...this.state};
    newState.sticksLeft -= i;
    newState.playerRedTurn = !newState.playerRedTurn;

    if (newState.sticksLeft ===  0) {
        newState.status = (newState.playerRedTurn ? 'Red Player ' : 'Blue Player ') + 'Won!!!';
    }
    this.setState(newState);
}

resetClick() {
    this.setState({
        playerRedTurn: true,
        sticksLeft: 20,
        status: ''
    });
}
}
