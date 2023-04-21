import { db } from "../lib/db.js";
const table = "contacts";

async function create({ name, email, phone }: ContactCreateInput) {
  const result = await db.table(table).insert({
    name,
    email,
    phone,
  });

  return result;
}
async function getAll() {
  const result = await db.select("*").from(table);
  return result;
}
async function deleteById(id: number) {
  return await db(table).where("id", id).del();
}

async function getById(id: number) {
  return await db.select("*").where("id", id).from(table).first();
}

type ContactCreateInput = {
  name: string;
  email: string;
  phone: string;
};

export const Contact = {
  create,
  getAll,
  deleteById,
  getById,
  _createTable,
};

// Table creation

export async function _createTable() {
  let exists = await db.schema.hasTable(table);

  if (exists) return;

  await db.schema.createTable(table, (table) => {
    table.increments("id");
    table.string("name");
    table.string("email").nullable();
    table.string("phone").nullable();
  });
}
