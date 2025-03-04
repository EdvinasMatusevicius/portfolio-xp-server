import { Pool, PoolConnection, FieldPacket, ResultSetHeader, QueryResult } from 'mysql2/promise';

export class Methods {
  private pool: Pool;

  constructor(pool: Pool) {
    this.pool = pool;
  }

  async insertFeedback(email: string, subject: string, response: string): Promise<QueryResult> {
    let connection: PoolConnection | undefined;
    try {
      connection = await this.pool.getConnection();
      const [result] = await connection.query('INSERT INTO feedback (email, subject, response) VALUES (?, ?, ?)', [email, subject, response]);
      return result;
    } catch (error) {
      console.error('Error inserting feedback:', error);
      throw error;
    } finally {
      if (connection) {
        connection.release();
      }
    }
  }
}