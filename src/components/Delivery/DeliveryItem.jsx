import React from 'react'
import './Delivery.css'
import { observer } from 'mobx-react'

export const DeliveryItem = observer(({ employee, appStore }) => {
    return (
        <div className="deliveryItem">
            <div>{employee.name}</div>
            <div>{'# ' + employee.id}</div>
            <div>{employee.orders.length}</div>
            <button className="deliveryItem__retireBtn" onClick={() => appStore.delivery.fire(employee)} >Уволить</button>
        </div>
    )
})