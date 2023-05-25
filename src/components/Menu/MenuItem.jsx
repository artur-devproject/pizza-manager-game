import React, { useState } from 'react'
import './Menu.css';
import { observer } from 'mobx-react';

export const MenuItem = observer(({ dish, appStore }) => {
    return (
        <div className="menuItem">
            <div className="menuItem__name">{dish.name}</div>
            <div className="menuItem__cost">{dish.cost}</div>
            <input type="number" min="0" max="100" step="1" 
                value={dish.price} 
                onChange={(event) => dish.setPrice(parseInt(event.target.value))} 
            />
            <button className="menuItem__addBtn" onClick={() => dish.changeStatus()} >
                {dish.isActive ? <>Убрать</> : <>Добавить</>}
            </button>
        </div>
    );
})
