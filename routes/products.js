import {Router} from "express"
import products from "../products.json" assert {type: "json"}

export const router = Router()

router.get("/", (req, res) => {
    // res.set("X-Content-Type-Options", "nosniff") // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
    res.json(products)
})