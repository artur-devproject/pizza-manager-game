import { makeAutoObservable } from "mobx"
import { PARAMS } from "../data/params"
import { v4 as createID } from 'uuid'

export class PizzaMaker {
    constructor(appStore) {
        this.appStore = appStore
        this.id = createID()
        this.name = "Пицца Мейкер"
        this.daySalary = 100
        this.order = null
        this.areIngredientsAvailable = false
        makeAutoObservable(this)
        this.appStore.finance.increaseStaffCosts(this.daySalary)
    }

    setOrder(data) {
        this.order = data
    }

    getNewOrder() {
        if(this.order) return this
        this.setOrder(this.appStore.orderBook.takeToPrepare())
        return this
    }

    getIngredients() {
        if(!this.order) return this
        if(this.areIngredientsAvailable) return this
        this.areIngredientsAvailable = this.appStore.storage.release(this.order.dish.products)
        return this
    }

    cookDish() {
        return setTimeout(() => {
            if(!this.areIngredientsAvailable) return false
            this.appStore.orderBook.setReady(this.order)
            this.setOrder(null)
            this.areIngredientsAvailable = false
            return true
        }, PARAMS.hour)
    }

    work() {
        return this.getNewOrder().getIngredients().cookDish()
    }
}