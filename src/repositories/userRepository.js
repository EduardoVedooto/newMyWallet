import connection from "../database.js";

const create = async (name, email, password) => {
  const user = await connection.query(
    `INSERT INTO "users" ("name", "email", "password") VALUES ($1, $2, $3) RETURNING *;`,
    [name, email, password]
  );
  return user;
}

const isUserRegistered = async (email) => {
  const result = await connection.query(
    `SELECT * FROM "users" WHERE "email"=$1`,
    [email]
  );
  return result.rows[0];
}

export { create, isUserRegistered };