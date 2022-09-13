import db from "../db.js";

async function getProducts(req, res) {
    try {
        const products = await db.collection("products").find().toArray();
        res.send(products);
    } catch (error) {
        return res.satus(500).send(error.message);
    }
}

async function postProducts(req, res) {
    const { name, price, brand, sizes, description, URLimage } = req.body;

    try {
        await db.collection("products").insertOne(req.body);
        res.sendStatus(201);
    } catch (error) {
        return res.satus(500).send(error.message);
    }
}

export { getProducts, postProducts };