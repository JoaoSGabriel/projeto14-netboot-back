import db from "../db.js";
import { ObjectId } from "mongodb";
import { cartSchema } from "../schemas/cartSchema.js";

async function addCartProducts(req, res) {
  const { id, name, price, brand, size, description, URLimage, qt } = req.body;

  const validationCart = cartSchema.validate(req.body, { abortEarly: false });
  if (validationCart.error) {
    return res
      .status(422)
      .send(validationCart.error.details.map((value) => value.message));
  }

  try {
    await db.collection("cart").insertOne(req.body);
    res.sendStatus(200);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function getCartProducts(req, res) {
  const { id } = req.params;

  try {
    const products = await db
      .collection("cart")
      .find({ user_ID: id })
      .toArray();
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
  const { user_id } = req.params;

  try {
    await db.collection("cart").deleteMany({ _id: new ObjectId(user_id) });
    res.sendStatus(200);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function updateQtCart(req, res) {
  const add = req.query.add;
  const sub = req.query.sub;
  const { id } = req.params;

  if (add && !sub) {
    console.log("add");
    try {
      await db
        .collection("cart")
        .updateOne({ _id: new ObjectId(id) }, { $inc: { qt: +1 } });
      res.sendStatus(200);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  } else if (!add && sub) {
    try {
      await db
        .collection("cart")
        .updateOne({ _id: new ObjectId(id) }, { $inc: { qt: -1 } });
      res.sendStatus(200);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
}

export {
  addCartProducts,
  getCartProducts,
  removeCartProducts,
  cleanCart,
  updateQtCart,
};
