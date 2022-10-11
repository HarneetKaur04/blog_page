import pgPromise from "pg-promise";
const pgp = pgPromise();
const db = pgp({
  connectionString: process.env.DB_URL,
});

export default db;