import React from 'react'
import './Screens.css'
import { screens } from '../../data/screens'

export default function ScreenList({ currentScreenId, setCurrentScreenId, appStore }) {
    return (
        <div className="screens__list">
            {screens.map((screen) => { return (
                <div 
                key={screen.id} 
                className={"screens__item" + (currentScreenId === screen.id ? " screens__item_active" : "")} 
                onClick={() => setCurrentScreenId(screen.id)}>
                    {screen.rusName}    
                </div>
            )
            })}
            
        </div>
    )
}