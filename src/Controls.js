import React, { Component } from 'react';


export class Controls extends Component {
    render() {
        return (
            <div>
                {(this.props.sticksLeft > 0) && 
                        <button 
                            className={(this.props.playerRedTurn) ? 'Turn-button-red' : 'Turn-button-blue'}
                            onClick={() => this.props.onClick(1)}
                        >1</button>}
                {(this.props.sticksLeft > 1) && 
                        <button 
                            className={(this.props.playerRedTurn) ? 'Turn-button-red' : 'Turn-button-blue'}
                            onClick={() => this.props.onClick(2)}
                        >2</button>}
                {(this.props.sticksLeft > 3) && 
                        <button 
                            className={(this.props.playerRedTurn) ? 'Turn-button-red' : 'Turn-button-blue'}
                            onClick={() => this.props.onClick(3)}
                        >3</button>}
            </div>
        )
    }
}
