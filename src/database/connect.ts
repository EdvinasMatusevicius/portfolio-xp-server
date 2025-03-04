import mysql, { ConnectionOptions, Pool } from 'mysql2/promise';

const port = process.env.MYSQL_PORT ? parseInt(process.env.MYSQL_PORT, 10) : 3306;

const access: ConnectionOptions = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port
};
let pool: Pool | null = null;;

async function getPool(): Promise<Pool> {
  if (!pool) {
    pool = mysql.createPool(access);
    await isDatabaseReady(pool); // Ensure database is ready on pool creation.
  }
  return pool;
}

async function isDatabaseReady(pool: Pool, maxRetries: number = 10, retryDelay: number = 1000): Promise<boolean> {
  let retries = 0;
  while (retries < maxRetries) {
    try {
      const connection = await pool.getConnection();
      await connection.ping();
      connection.release();
      return true;
    } catch (error) {
      console.log(`Database not ready, retrying in ${retryDelay / 1000} seconds... (attempt ${retries + 1}/${maxRetries})`);
      retries++;
      await new Promise(resolve => setTimeout(resolve, retryDelay));
    }
  }
  console.error('Database readiness check failed.');
  return false;
}
export default getPool;