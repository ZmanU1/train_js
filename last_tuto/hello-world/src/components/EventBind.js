import React, { Component } from 'react'

class EventBind extends Component {
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click me</button>
            </div>
        )
    }
}

export default EventBind
