import { v4 as uuidv4 } from 'uuid'

export class Order {
    constructor(dish) {
        this.id = uuidv4()
        this.dish = dish
        this.qty = this.getRandomQty()
        this.status = 0
        this.price = Math.floor(this.dish.price * this.qty)
    }

    getRandomQty() {
        let price = this.dish.price < this.dish.cost ? this.dish.cost : this.dish.price
        let priceFactor = 3 * this.dish.cost / price
        if(priceFactor < 0.5) return 0
        return Math.floor(Math.random() * 5 * priceFactor)
    }

    static getStatus(num) {
        const option = [
            "Новый",
            "В работе",
            "Выдача",
            "Доставка",
            "Выполнен",
        ]
        return option[num]
    }

    changeStatus() {
        if(this.status < 4) this.status = this.status + 1
        return this
    }
}