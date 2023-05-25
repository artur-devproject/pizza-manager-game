import { v4 as uuidv4 } from 'uuid'

export class Inventory {
    constructor(product, qty) {
        this.id = uuidv4()
        this.product = product
        this.qty = qty
        this.rest_life = product.shelf_life
    }

    get total() {
        return Math.floor(this.product.price * this.qty * 100) / 100
    }

    decreaseLife() {
        if(this.rest_life > 0) this.rest_life = this.rest_life - 1
    }

    take(qty) {
        const stockBalance = Math.floor((this.qty - qty) * 100) / 100
        if(stockBalance < 0) return (stockBalance * (-1))
        this.qty = stockBalance
        return 0
    }
}