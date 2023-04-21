import knexPgm, { Knex } from "knex";

const knex: any = knexPgm;
export const db: Knex = knex({
  client: "better-sqlite3",
  connection: {
    filename: "./data.db",
  },
  useNullAsDefault: true,
});
