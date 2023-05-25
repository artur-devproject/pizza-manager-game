import React, { useState } from 'react'
import './Orders.css';
import OrderItem from './OrderItem'
import { observer } from 'mobx-react';

export const OrderScreen = observer(({ appStore }) => {

    const results = appStore.orderBook.totalStats

    return (
        <div className="orderList">
            <div className="orderList__total">Общее число заказов: {results.number}</div>
            <div className="orderList__total">Сумма: {results.amount}</div>            
            <br /><>Новые заказы</><br /><br />
            {results.number > 0
            ? appStore.orderBook.activeOrders
                .map(order => <OrderItem key={order.id} order={order} appStore={appStore} />)
            : <>Заказы отсутствуют...</>}
        </div>
    );
})
