import db from "../db.js";

async function postCheckout() {
  const { user, cart, bank, adress } = req.body;

  const checkout = {
    user,
    cart,
    bank,
    adress,
  };

  try {
    await db.collection("checkout").insertOne(checkout);
    res.sendStatus(200);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function getCheckout() {
  try {
    const data = await db.collection("checkout").find().toArray();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
}
