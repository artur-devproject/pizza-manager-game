import React from 'react'
import './Kitchen.css'
import { KitchenItem } from './KitchenItem'
import { observer } from 'mobx-react'

export const KitchenScreen = observer(({ appStore }) => {

    function handleHireBtn() {
        return appStore.kitchen.hire(appStore)
    }

    return (
        <div>
            <div className="kitchen__hire">
                <div>Пицца Мейкеры:</div>
                <div>{appStore.kitchen.size}</div>
                <button onClick={handleHireBtn}>Нанять</button>
            </div>
            <div className="kitchen__list">
                {appStore.kitchen.staff.map(elem => <KitchenItem key={elem.id} employee={elem} appStore={appStore} />)}
            </div>
        </div>
    )
})
