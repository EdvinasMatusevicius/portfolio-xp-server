import getPool from "../database/connect";
import { Methods } from "../database/methods";

export class FeedbackService {
  private dbMethods: Methods;

  constructor(dbMethods: Methods) {
    this.dbMethods = dbMethods;
  }

  static async create(): Promise<FeedbackService> {
    const pool = await getPool();
    const dbMethods = new Methods(pool);
    return new FeedbackService(dbMethods);
  }

  async createFeedback(email: string, subject: string, feedback: string): Promise<any> {
    return this.dbMethods.insertFeedback(email, subject, feedback);
  }
}


// export const saveFeedback = async (email: string, feedback: string) => {
//     try {
//         connection.query('INSERT INTO feedback (email, response) VALUES (?, ?)', ['bigtest@email.com', 'blah blah blah BLAH']);
//     } catch (error) {
//         console.error("Error in mediaPlayerService:", error);
//         throw error; // Re-throw the error to be handled in the controller
//     }
// };