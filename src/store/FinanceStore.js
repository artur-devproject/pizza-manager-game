import { makeAutoObservable } from "mobx"

export class FinanceStore {
    constructor(appStore) {
        this.appStore = appStore
        this.balance = 5000
        this.rentCosts = 200
        this.staffCosts = 0
        this.totalExpences = 0
        this.totalIncome = 0
        this.adsBudget = 0
        makeAutoObservable(this)
    }

    get netProfit() {
        return Math.floor(this.totalIncome - this.totalExpences)
    }

    buyAds(amount) {
        this.adsBudget = Math.floor(this.adsBudget + amount)
        this.decreaseBy(amount)
    }

    decreaseBy(num) {
        this.totalExpences = Math.floor(this.totalExpences + num)
        this.balance = Math.floor(this.balance - num)
        return this
    }

    increaseBy(num) {
        this.totalIncome = Math.floor(this.totalIncome + num)
        this.balance = Math.floor(this.balance + num)
        return this
    }

    increaseStaffCosts(num) {
        this.staffCosts += num
        this.decreaseBy(num)
        return this
    }

    decreaseStaffCosts(num) {
        this.staffCosts -= num
        return this
    }

    hourUpdate() {
        if(this.adsBudget < 10) this.adsBudget = 0
        if(this.adsBudget > 0) this.adsBudget = Math.floor(this.adsBudget - (0.05 * this.adsBudget))
        return this
    }

    dailyUpdate() {
        this.decreaseBy(this.rentCosts + this.staffCosts)
        return this
    }
}