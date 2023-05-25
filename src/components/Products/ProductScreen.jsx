import React from 'react'
import './Products.css';
import { products } from '../../data/products'
import { ProductItem } from './ProductItem'
import { Inventory } from '../../entities/Inventory'
import { observer } from 'mobx-react'

export const ProductScreen = observer(({ appStore }) => {
    function buyAllProducts() {
        for(let product of Object.values(products)) {
            let inventory = new Inventory(product, 1)
            if(inventory.total > appStore.finance.balance) break
            appStore.finance.decreaseBy(inventory.total)
            appStore.storage.put(inventory)
        }
    }
    return (
        <div className="productsList">
            <button onClick={buyAllProducts}>Купить все</button>
            {appStore.storage.products.map((product) => { return (
                <ProductItem key={product.id} product={product} appStore={appStore} />
            )})}
        </div>
    );
})
