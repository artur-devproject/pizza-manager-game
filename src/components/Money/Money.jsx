import React from 'react'
import './Money.css'
import { observer } from 'mobx-react'

export const Money = observer(({ appStore }) => {

    return (
        <div className="money">
            ${ appStore.finance.balance }
        </div>
    )
})