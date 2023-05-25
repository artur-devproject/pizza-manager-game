import { products } from "./products"
import { Dish } from '../entities/Dish'

export const dishes = [
    new Dish("Четыре сыра",
        [
            { ...products.flour, qty: 0.3 },
            { ...products.olive_oil, qty: 0.03 },
            { ...products.mozzarella, qty: 0.1 },
            { ...products.parmesan, qty: 0.05 },
            { ...products.cheese, qty: 0.1 },
        ]
    ),
    new Dish("Капрезе",
        [
            { ...products.flour, qty: 0.3 },
            { ...products.olive_oil, qty: 0.03 },
            { ...products.mozzarella, qty: 0.1 },
            { ...products.greens, qty: 0.1 },
            { ...products.cherry_tomato, qty: 0.25 },
        ]
    ),
    new Dish("Примавера",
        [
            { ...products.flour, qty: 0.3 },
            { ...products.olive_oil, qty: 0.03 },
            { ...products.mozzarella, qty: 0.1 },
            { ...products.greens, qty: 0.1 },
            { ...products.parmesan, qty: 0.05 },
            { ...products.prosciutto, qty: 0.1 },
            { ...products.cherry_tomato, qty: 0.1 },
        ]
    ),
    new Dish("Капричоза",
        [
            { ...products.flour, qty: 0.3 },
            { ...products.olive_oil, qty: 0.03 },
            { ...products.tomato_sauce, qty: 0.1 },
            { ...products.mozzarella, qty: 0.1 },
            { ...products.prosciutto, qty: 0.05 },
            { ...products.olives, qty: 0.05 },
            { ...products.mushrooms, qty: 0.05 },
            { ...products.artichoke, qty: 0.05 },
        ]
    )
]