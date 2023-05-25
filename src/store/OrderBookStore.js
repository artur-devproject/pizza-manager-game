import { makeAutoObservable } from "mobx"
import { Order } from "../entities/Order"

export class OrderBookStore {

    all = []

    incoming = []

    ready = []

    completed = []

    constructor(appStore) {
        this.appStore = appStore
        makeAutoObservable(this)
    }

    get totalStats() {
        const number = this.all.length
        const amount = this.all.reduce((acc, order) => acc + order.price, 0)
        return {number, amount}
    }

    get activeOrders() {
        return this.all.filter(order => order.status !== 4)
    }

    run() {
        let orderNum = Math.floor(Math.random() * (2.5 + (this.appStore.finance.adsBudget / 200)))
        console.log(this.appStore.finance.adsBudget)
        console.log(orderNum)
        while(orderNum > 0) {
            this.createOrder()
            orderNum--
        }
    }

    createOrder() {
        const menu = this.appStore.menu.list
        const randomDish = menu[Math.floor(Math.random() * menu.length)]
        if(!randomDish.isActive) return this
        const newOrder = new Order(randomDish)
        if(newOrder.qty < 1) return this
        this.all.push(newOrder)
        this.incoming.push(newOrder)
        return this
    }

    takeToPrepare() {
        return !this.incoming.length ? null : this.incoming.shift().changeStatus()
    }

    setReady(order) {
        this.ready.push(order.changeStatus())
        return this
    }

    takeToDeliver() {
        return !this.ready.length ? null : this.ready.shift().changeStatus()
    }

    setCompleted(order) {
        this.completed.push(order.changeStatus())
        this.appStore.finance.increaseBy(order.price)
        return this
    }
}