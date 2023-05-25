import React, { useState } from 'react'
import './Products.css'
import { observer } from 'mobx-react'

export const ProductItem = observer(({ product, appStore }) => {

    const [productQty, setProductQty] = useState(0)

    function buyProduct() {
        if(product.price * productQty > appStore.finance.balance) return
        appStore.finance.decreaseBy(product.price * productQty)
        appStore.storage.increaseQty(product.id, productQty)
        return setProductQty(0)
    }

    return (
        <div className="productItem">
            <div className="productItem__name">
                {product.name}
            </div>
            <div className="productItem__price">
                {product.price}
            </div>
            <div>{product.qty}</div>
            <input type="number" min="0" max="50" step="1" 
                value={productQty} 
                onChange={(event) => setProductQty(parseInt(event.target.value))} 
            />
            <button 
                className="productItem__buyBtn"
                onClick={buyProduct}>
                Купить
            </button>
        </div>
    );
})
