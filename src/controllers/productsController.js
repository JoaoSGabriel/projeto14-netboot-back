import { ObjectId } from "mongodb";
import db from "../db.js";

async function getProducts(req, res) {
  try {
    const products = await db.collection("products").find().toArray();
    res.send(products);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function postProducts(req, res) {
  console.log('chegou aqui')

  try {
    await db.collection("products").insertOne(req.body);
    res.sendStatus(201);
  } catch (error) {
    return res.status(500).send(error.message);
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

async function addFavoriteProduct(req, res) {
  const { id } = req.params;

  try {
    const product = await db.collection("products").findOne({ _id: new ObjectId(id) });
    if (!product) return res.sendStatus(404);

    await db.collection("products").updateOne({_id: new ObjectId(id)}, {$set:{
      favorite: [...product.favorite, res.locals.session.userID]
    }});

    return res.sendStatus(200)
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function removeFavoriteProduct(req, res) {
  const { id } = req.params;

  try {
    const product = await db.collection("products").findOne({ _id: new ObjectId(id) });
    if (!product) return res.sendStatus(404);

    await db.collection("products").updateOne({_id: new ObjectId(id)}, {$set:req.body});

    return res.sendStatus(200);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

export { getProducts, postProducts, getOneProduct, addFavoriteProduct, removeFavoriteProduct };
