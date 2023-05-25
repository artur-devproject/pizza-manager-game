import React, { useState } from 'react'
import './Finance.css'
import { observer } from 'mobx-react';

export const FinanceScreen = observer(({ appStore }) => {

    const [adsAmount, setAdsAmount] = useState(0)

    function handleBuyAdsBtn() {
        if(adsAmount == 0) return
        appStore.finance.buyAds(adsAmount)
        return setAdsAmount(0)
    }


    return (
        <div className="finance__expences">
            <div>Ежедневные расходы на аренду: ${appStore.finance.rentCosts}</div>
            <div>Ежедневные расходы на персонал: ${appStore.finance.staffCosts}</div>
            <div>Суммарные расходы: ${appStore.finance.totalExpences}</div>
            <div>Суммарные доходы: ${appStore.finance.totalIncome}</div>
            <div>Чистая прибыль: ${appStore.finance.netProfit}</div>
            <br/><br/>
            <label>
                Купить рекламу:
                <input type="number" min="0" max="1000" step="50" 
                value={adsAmount} 
                onChange={(event) => setAdsAmount(parseInt(event.target.value))} />
                <button onClick={handleBuyAdsBtn} >Купить</button>
            </label><br/>
            <>Рекламный бюджет: ${appStore.finance.adsBudget}</>
        </div>
    )
})
