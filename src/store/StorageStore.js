import { makeAutoObservable } from "mobx"
import { products as productList } from '../data/products'

export class StorageStore {

    constructor(appStore) {
        this.appStore = appStore
        this.products = Object.values(productList).map(elem => ({...elem, qty: 1}))
        makeAutoObservable(this)
    }

    increaseQty(id, num) {
        this.products.forEach(product => {
            if(product.id === id) product.qty = Math.floor((product.qty + num) * 10) / 10
        })
        return this
    }

    checkIfAvailable(products) {
        for(let elem of products) {
            let check = this.products.some(item => item.id === elem.id && item.qty >= elem.qty)
            if(!check) return false
        }
        return true
    }

    release(products) {
        if(!this.checkIfAvailable(products)) return false
        for(let elem of products) {
            this.products.forEach(item => { 
                if(item.id === elem.id) item.qty = Math.floor((item.qty - elem.qty) * 10) / 10
            })
        }
        return true
    }
}