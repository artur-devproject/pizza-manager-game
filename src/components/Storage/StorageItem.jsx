import React from 'react'
import './Storage.css'

export default function StorageItem({ item }) {
    return (
        <div className="storageItem">
            <div className="storageItem__name">{item.product.name}</div>
            <div className="storageItem__life">{item.rest_life}</div>
            <div className="storageItem__qty">{item.qty}</div>
        </div>
    );
}
