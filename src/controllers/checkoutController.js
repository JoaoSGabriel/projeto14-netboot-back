import db from "../db.js";
import { bankSchema, adressSchema } from "../schemas/checkoutSchema.js";
import { stripHtml } from "string-strip-html";

export async function postCheckout(req, res) {
  let { user, cart, bank, adress } = req.body;

  const validationBank = bankSchema.validate(bank, { abortEarly: false });
  if (validationBank.error) {
    return res
      .status(422)
      .send(validationBank.error.details.map((value) => value.message));
  }

  const validationAdress = adressSchema.validate(adress, { abortEarly: false });
  if (validationAdress.error) {
    return res
      .status(422)
      .send(validationAdress.error.details.map((value) => value.message));
  }

  bank = {
    country: stripHtml(bank.country),
    adress: stripHtml(bank.adress),
    numberPhone,
    cep,
    adressNumber,
    complement: stripHtml(bank.complement),
    district: stripHtml(bank.district),
    city: stripHtml(bank.city),
    state: stripHtml(bank.state),
  };

  adress = {
    number,
    name: stripHtml(adress.name),
    date: stripHtml(adress.date),
    cvv: stripHtml(adress.cvv),
  };

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

export async function getCheckout(req, res) {
  try {
    const data = await db.collection("checkout").find().toArray();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
}
