import './index.scss'

import React from 'react'

export default function Menu({activeState, activeCallback}) {
    return (
        <div className={"menu " + (activeState && "active")}>
            <ul>
                <li>
                    <a href="#intro" onClick={()=> activeCallback(false)}>Home</a>
                </li>
                <li>
                    <a href="#projects" onClick={()=> activeCallback(false)}>Projects</a>
                </li>
                {/* <li>
                    <a href="#portfolio" onClick={()=> activeCallback(false)}>Portfolio</a>
                </li>
                <li>
                    <a href="#contact" onClick={()=> activeCallback(false)}>Contact</a>
                </li>
                <li>
                    <a href="#works" onClick={()=> activeCallback(false)}>Works</a>
                </li> */}
            </ul>
        </div>
    )
}

