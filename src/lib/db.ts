import knexPgm, { Knex } from "knex";

const knex: any = knexPgm;
export const db: Knex = knex({
  client: "better-sqlite3",
  connection: {
    filename: "./data.db",
  },
  useNullAsDefault: true,
});

export async function initDb() {
  await db.schema.createTable("contacts", (table) => {
    table.increments("id");
    table.string("name");
    table.string("email").nullable();
    table.string("phone").nullable();
  });
}
