import { db } from "../lib/db.js";
const table = "contacts";
export const Contact = {
  async create({ name, email, phone }: ContactCreateInput) {
    const result = await db.table(table).insert({
      name,
      email,
      phone,
    });

    return result;
  },
  async getAll() {
    const result = await db.select("*").from(table);
    return result;
  },
  async deleteById(id: number) {
    return await db(table).where("id", id).del();
  },

  async getById(id: number) {
    return await db.select("*").where("id", id).from(table).first();
  },
};

type ContactCreateInput = {
  name: string;
  email: string;
  phone: string;
};
