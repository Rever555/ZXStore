const db = require('../db');



class OrderController{
    async createOrder(req, res) {
        const {user_id , items_id, status_now} = req.body;
        const newOrder = await db.query('INSERT INTO orders (user_id, items_id, status_now) values ($1, $2, $3) RETURNING *', [user_id , items_id, status_now]);
        res.json(newOrder);
        console.log(req.body);
    }
    async getOrder(req, res) {
        const user_id = req.params.user_id;
        const getOrderId = await db.query('SELECT * from orders WHERE user_id = ($1)', [user_id]);
        res.json(getOrderId.rows);
        console.log(user_id)
    }
    async getOrderId(req, res) {
        const id = req.params.id;
        const getOrderById = await db.query('SELECT * from orders WHERE id = ($1)', [id]);
        res.json(getOrderById.rows);
        console.log(id)
    }
}

module.exports = new OrderController()
