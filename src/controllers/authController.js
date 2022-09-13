import { v4 as uuid } from 'uuid';
import bcrypt from 'bcrypt';
import db from '../db.js';

async function signUp(req, res) {
    try {
        res.send('Rota ativa');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function signIn(req, res) {
    try {
        res.send('Rota ativa');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

export { signUp, signIn };