import React from "react"
import './Modal.css'

export function Modal({ handleRestart }) {

    return (
        <div className="modal">
            <div className="modal__content">
                <div className="modal__message">К сожалению, Вы - банкрот...</div>
                <button className="modal__restartBtn" onClick={handleRestart} >Начать заново</button>
            </div>
        </div>
    )
}