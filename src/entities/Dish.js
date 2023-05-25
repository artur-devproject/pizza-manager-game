import { makeAutoObservable } from "mobx"
import { v4 as createID } from 'uuid'

export class Dish {
    constructor(name, products) {
        this.id = createID()
        this.name = name
        this.products = products
        this.isActive = true
        this.price = 0
        makeAutoObservable(this)
    }

    changeStatus() {
        this.isActive = !this.isActive
        return this
    }

    setPrice(price) {
        this.price = price
    }

    get cost() {
        const calcCost = this.products.reduce((acc, product) => acc + product.price * product.qty, 0)
        return Math.floor(calcCost * 100) / 100
    }
}