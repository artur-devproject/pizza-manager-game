import React from 'react'
import './Delivery.css'
import { DeliveryItem } from './DeliveryItem'
import { observer } from 'mobx-react'

export const DeliveryScreen = observer(({ appStore }) => {

    function handleHireBtn() {
        return appStore.delivery.hire(appStore)
    }

    return (
        <div>
            <div className="delivery__hire">
                <div>Курьеры (доставщики пиццы):</div>
                <div>{appStore.delivery.size}</div>
                <button onClick={handleHireBtn}>Нанять</button>
            </div>
            <div className="delivery__list">
                {appStore.delivery.staff.map(elem => <DeliveryItem key={elem.id} employee={elem} appStore={appStore} />)}
            </div>
        </div>
    )
})
