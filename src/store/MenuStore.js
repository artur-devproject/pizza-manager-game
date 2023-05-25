import { makeAutoObservable } from "mobx"

export class MenuStore {
    list
    
    constructor(appStore, dishes) {
        this.appStore = appStore
        this.list = dishes
        makeAutoObservable(this)
    }
}