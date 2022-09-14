import { ObjectId } from "mongodb";
import db from "../db.js";

async function getProducts(req, res) {
  try {
    const products = await db.collection("products").find().toArray();
    res.send(products);
  } catch (error) {
    return res.satus(500).send(error.message);
  }
}

async function getOneProduct(req, res) {
  const { id } = req.params;

  try {
    const product = await db
      .collection("products")
      .findOne({ _id: new ObjectId(id) });

    if (product) {
      res.status(200).send(product);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function postProducts(req, res) {
  const { name, price, brand, sizes, description, URLimage } = req.body;

  try {
    await db.collection("products").insertOne(req.body);
    res.sendStatus(201);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

export { getProducts, postProducts };
