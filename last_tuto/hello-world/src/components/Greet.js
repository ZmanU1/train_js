import React from 'react'

const Greet = props => {
    const {name, heroname} = props
    return (
        <div>
            <h1>
                hello {name} a.k.a {heroname}
            </h1>
        </div>
    )
}

export default Greet