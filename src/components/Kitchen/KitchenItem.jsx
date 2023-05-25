import React from 'react'
import './Kitchen.css'
import { observer } from 'mobx-react'

export const KitchenItem = observer(({ employee, appStore }) => {
    return (
        <div className="kitchenItem">
            <div>{employee.name}</div>
            <div>{'# ' + employee.id}</div>
            <div>{employee.order && employee.order.dish.name}</div>
            <button className="kitchenItem__retireBtn" onClick={() => appStore.kitchen.fire(employee)} >Уволить</button>
        </div>
    )
})