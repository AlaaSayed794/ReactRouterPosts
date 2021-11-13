import React from 'react'
import Header from './Header'

export default function MainFrame(props) {
    return (
        <div className="App">
            <Header logout={props.logout} />
            {props.children}
        </div>
    )
}
