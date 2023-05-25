import React from 'react'
import './Time.css'

export default function Time({ time }) {
    return (
        <div className="time">
            {Math.floor(time / 12) + 1} дн. { time % 12 + 1 } ч.
        </div>
    )
}