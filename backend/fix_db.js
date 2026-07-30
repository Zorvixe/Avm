import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pg;

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 5432,
});

async function run() {
  try {
    console.log("Dropping old constraint...");
    await pool.query(`ALTER TABLE cart_items DROP CONSTRAINT IF EXISTS cart_items_user_id_product_id_key CASCADE`);
    console.log("Constraint dropped.");
  } catch (err) {
    console.error(err);
  } finally {
    await pool.end();
  }
}

run();
