import { v4 as uuidv4 } from 'uuid'

export class Product {
    constructor(name, price) {
        this.id = uuidv4()
        this.name = name
        this.price = price
    }
}