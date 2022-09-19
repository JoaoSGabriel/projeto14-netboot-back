import db from "../db.js";
import {
  userSchema,
  bankSchema,
  adressSchema,
} from "../schemas/checkoutSchema.js";
import { stripHtml } from "string-strip-html";

export async function postCheckout(req, res) {
  let { user, cart, bankData, adressData } = req.body;

  const validationUser = userSchema.validate(user, { abortEarly: false });
  if (validationUser.error) {
    return res
      .status(422)
      .send(validationUser.error.details.map((value) => value.message));
  }

  const validationBank = bankSchema.validate(bankData, { abortEarly: false });
  if (validationBank.error) {
    return res
      .status(422)
      .send(validationBank.error.details.map((value) => value.message));
  }

  const validationAdress = adressSchema.validate(adressData, {
    abortEarly: false,
  });
  if (validationAdress.error) {
    return res
      .status(422)
      .send(validationAdress.error.details.map((value) => value.message));
  }

  if (bankData.complement) {
    bankData.complement = stripHtml(bankData.complement);
  }

  adressData = {
    country: stripHtml(adressData.country).result,
    adress: stripHtml(adressData.adress).result,
    numberPhone: adressData.numberPhone,
    cep: adressData.cep,
    adressNumber: adressData.adressNumber,
    complement: adressData.complement,
    district: stripHtml(adressData.district).result,
    city: stripHtml(adressData.city).result,
    state: stripHtml(adressData.state).result,
  };

  bankData = {
    numberCard: bankData.numberCard,
    name: stripHtml(bankData.name).result,
    date: stripHtml(bankData.date).result,
    cvv: bankData.cvv,
  };

  const checkout = {
    user,
    cart,
    bankData,
    adressData,
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
