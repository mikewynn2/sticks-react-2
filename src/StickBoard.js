import React, { Component } from 'react';


export class StickBoard extends Component {
    render() {
        console.log('this.props.playerRedTurn: ' + this.props.playerRedTurn)
        return (
            <div className="Stick-board">
                {Array(this.props.sticksLeft).fill(
                    <button 
                        className= {(this.props.playerRedTurn) ? 'Red' : 'Blue'} 
                    />
                )}
            </div>
        )
    }
}
