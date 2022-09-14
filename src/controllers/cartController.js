import db from "../db.js";
import { ObjectId } from "mongodb";

async function addCartProducts(req, res) {
  const { name, price, brand, sizes, description, URLimage } = req.body;

  try {
    await db.collection("cart").insertOne(req.body);
    res.sendStatus(200);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function getCartProducts(req, res) {
  try {
    const products = await db.collection("products").find().toArray();
    res.status(200).send(products);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function removeCartProducts(req, res) {
  const { id } = req.params;

  try {
    await db.collection("cart").deleteOne({ _id: new ObjectId(id) });
    res.sendStatus(200);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function cleanCart(req, res) {
  try {
    await db.collection("products").deleteMany({});
    res.sendStatus(200);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

export { addCartProducts, getCartProducts, removeCartProducts, cleanCart };
