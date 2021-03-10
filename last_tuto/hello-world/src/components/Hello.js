import React from 'react'

const Hello = () => {
    //     return (
    //         <div className='classnametag'>
    //             <h1>bonjour</h1>
    //         </div>
    //     )
    // }
    return React.createElement(
        'div', 
        {id: 'coucou', className: 'gg'}, 
        React.createElement('h1', null, 'coucou hello component'))
}

export default Hello
