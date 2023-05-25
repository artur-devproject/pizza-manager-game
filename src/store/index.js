import { KitchenStore } from './KitchenStore'
import { DeliveryStore } from './DeliveryStore'
import { MenuStore } from './MenuStore'
import { OrderBookStore } from './OrderBookStore'
import { StorageStore } from "./StorageStore"
import { dishes } from "../data/dishes"
import { FinanceStore } from './FinanceStore'

export class AppStore {
    constructor() {
        this.finance = new FinanceStore(this)
        this.kitchen = new KitchenStore(this)
        this.delivery = new DeliveryStore(this)
        this.menu = new MenuStore(this, dishes)
        this.orderBook = new OrderBookStore(this)
        this.storage = new StorageStore(this)
    }
}
