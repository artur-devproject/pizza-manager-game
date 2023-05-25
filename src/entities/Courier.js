import { makeAutoObservable } from "mobx"
import { PARAMS } from "../data/params"
import { v4 as createID } from 'uuid'

export class Courier {
    constructor(appStore) {
        this.appStore = appStore
        this.id = createID()
        this.name = "Курьер"
        this.daySalary = 150
        this.orders = []
        makeAutoObservable(this)
        this.appStore.finance.increaseStaffCosts(this.daySalary)
    }

    setOrder(order) {
        this.orders.push(order)
    }

    removeOrders() {
        this.orders = []
    }

    getNewOrders() {
        if(this.orders.length) return this
        for(let i=0; i<4; i++) {
            let order = this.appStore.orderBook.takeToDeliver()
            if(!order) break
            this.setOrder(order)
        }
        return this
    }

    deliverOrders() {
        return setTimeout(() => {
            if(!this.orders.length) return false
            for(let order of this.orders) this.appStore.orderBook.setCompleted(order)
            this.removeOrders()
            return true
        }, PARAMS.hour * 2)
    }

    work() {
        return this.getNewOrders().deliverOrders()
    }
}