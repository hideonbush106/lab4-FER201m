import React from 'react'

const Component = () => {
    //create failed quality gate on purpose
    const a = 1
    let b = a === NaN
    return (
        <div>Component</div>
    )
}

export default Component