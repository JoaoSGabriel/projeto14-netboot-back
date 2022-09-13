import { v4 as uuid } from 'uuid';
import bcrypt from 'bcrypt';
import db from '../db.js';
import { signUp_Schema, signIn_Schema } from '../schemas/authSchema.js';

async function signUp(req, res) {
    const { name, email, password, repeat_Password } = req.body;

    const validation = signUp_Schema.validate(req.body, { abortEarly: false });
    if (validation.error) {
        return res.status(401).send(validation.error.details.map(value => value.message));
    }

    const crypt_Password = bcrypt.hashSync(password, 10);

    try {
        const user = await db.collection("users").findOne({ name });
        if (user === null) {
            await db.collection("users").insertOne({
                name,
                email,
                password: crypt_Password
            });
            return res.sendStatus(201);
        } else {
            return res.sendStatus(409);
        }
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function signIn(req, res) {
    const { email, password } = req.body;

    const validation = signIn_Schema.validate(req.body, { abortEarly: false });
    if (validation.error) {
        return res.status(401).send(validation.error.details.map(value => value.message));
    }

    try {
        const user = await db.collection("users").findOne({ email });
        if (user && bcrypt.compareSync(password, user.password)) {
            const token = uuid();
            const session = {
                userID: user._id,
                token
            }
            await db.collection("sessions").insertOne(session);
            return res.status(200).send(session);
        } else {
            return res.sendStatus(404);
        }
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

export { signUp, signIn };