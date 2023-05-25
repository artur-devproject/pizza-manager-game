import React from 'react'
import { KitchenScreen } from '../Kitchen/KitchenScreen'
import { DeliveryScreen } from '../Delivery/DeliveryScreen'
import { MenuScreen } from '../Menu/MenuScreen'
import { OrderScreen } from '../Orders/OrderScreen'
import { ProductScreen } from '../Products/ProductScreen'
import './Screens.css'
import { FinanceScreen } from '../Finance/FinanceScreen'

export default function ScreenBody({ currentScreenId, setCurrentScreenId, appStore }) {
    return (
        <div className="screenBody">
            {currentScreenId === 1 && <ProductScreen appStore={appStore} />}
            {currentScreenId === 2 && <KitchenScreen appStore={appStore} />}
            {currentScreenId === 3 && <DeliveryScreen appStore={appStore} />}
            {currentScreenId === 4 && <OrderScreen appStore={appStore} />}
            {currentScreenId === 5 && <FinanceScreen appStore={appStore} />}
            {currentScreenId === 6 && <MenuScreen appStore={appStore} />}
        </div>
    )
}