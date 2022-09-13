import db from "../db.js";

async function getProducts(req, res) {
    try {
        res.send('Rota ativa');
    } catch (error) {
        return res.satus(500).send(error.message);
    }
}

async function postProducts(req, res) {
    try {
        res.send('Rota ativa');
    } catch (error) {
        return res.satus(500).send(error.message);
    }
}

export { getProducts, postProducts };