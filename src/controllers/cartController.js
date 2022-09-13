import db from "../db.js";

async function addCartProducts(req, res) {
    try {
        res.send('Rota ativa');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function getCartProducts(req, res) {
    try {
        res.send('Rota ativa');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function removeCartProducts(req, res) {
    try {
        res.send('Rota ativa');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function cleanCart(req, res) {
    try {
        res.send('Rota ativa');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

export { addCartProducts, getCartProducts, removeCartProducts, cleanCart };