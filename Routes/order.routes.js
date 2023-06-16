const Router = require("express")
const router = new Router()
const OrderController = require("../controllers/orders.controller")

router.post("/orders", OrderController.createOrder)
router.get("/orders/:user_id", OrderController.getOrder)

module.exports = router