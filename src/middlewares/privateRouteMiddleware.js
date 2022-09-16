import db from "../db.js";

async function privateToken(req, res, next) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");
  if (!token) return res.sendStatus(401);

  const session = await db.collection("sessions").findOne({ token });
  if (!session) return res.sendStatus(401);

  res.locals.session = session;
  next();
}

export default privateToken;
