import {Router} from "express"
import {cartDelete, cartPost, cartOrder} from "../utils.js"

export const router = Router()

export let cart = []
let orders = []

router.get("/", (req, res) => {
    res.json(cart)
})

router.post("/", cartPost, (req, res) => {
    cart.push({serial: req.body.serial})
    console.log("cart:", cart)
    res.json({
        sucsess: true,
        msg: `Article number ${req.body.serial} added to cart`
    })
})

router.delete("/", cartDelete, (req, res) => {
    cart = cart.filter(item => item.serial !== req.body.serial)
    res.json({
        sucsess:true,
        msg: `Item with serialnumber ${req.body.serial} deleted.`
    })
})

router.post("/order", cartOrder, (req, res) => {
    orders.push(
        {
            order: cart,
            paid: false,
            address: {
                name: req.body.address.name,
                street: req.body.address.street,
                city: req.body.address.city,
                zip: req.body.address.zip
            },
            card: {
                owner: req.body.card.owner,
                number: req.body.card.number,
                valid: req.body.card.valid,
                ccv: req.body.card.ccv
            }
        }
    )
    cart = []
    console.log(orders)
    res.json({
        sucsess:true,
        msg: `Order added.`
    })
})