import React from 'react'
import './Orders.css'
import { Order } from '../../entities/Order';

export default function OrderItem({ order, appState }) {
    return (
        <div className="orderItem">
            <div className="orderItem__name">{order.dish.name}</div>
            <div className="orderItem__qty">{order.qty}</div>
            <div className="orderItem__total">{order.price}</div>
            <div className="orderItem__status">{Order.getStatus(order.status)}</div>
        </div>
    );
}
