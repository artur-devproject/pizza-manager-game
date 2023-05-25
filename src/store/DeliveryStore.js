import { makeAutoObservable } from "mobx"
import { Courier } from "../entities/Courier"

export class DeliveryStore {
    staff = []

    constructor(appStore) {
        this.appStore = appStore
        makeAutoObservable(this)
    }

    get size() {
        return this.staff.length
    }

    hire() {
        if(this.size === 20) return this
        this.staff.push(new Courier(this.appStore))
        return this
    }

    fire(employee) {
        if(employee.orders.length) return this
        this.staff = this.staff.filter(elem => elem !== employee)
        this.appStore.finance.decreaseStaffCosts(employee.daySalary)
        return this
    }

    run() {
        for(let employee of this.staff) employee.work()
    }
}